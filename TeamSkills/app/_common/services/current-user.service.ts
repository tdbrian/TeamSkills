import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {User} from '../models/user.model'
import {Skill, SkillLevel} from '../models/skill.model'
import {Project, ProjectLevel} from '../models/project.model'

@Injectable()
export class CurrentUserService {

    public waitingOnNewUser: User;
    public currentUser: User;
    public onUserLoggedIn: Rx.Subject<User>;
    public onUserCreated: Rx.Subject<User>;
    private usersRepo: Firebase;

    constructor(private backend: FireBaseService) { 
        this.setupObservables();
        this.listenForIncomingEvents();
        this.usersRepo = backend.users;
    }

    private listenForIncomingEvents() {
        this.backend.users.on(FireBaseService.ADDED, this.onUserAdded);
    }

    private onUserAdded(newUserSnapshot: FirebaseDataSnapshot) {
        let newUser: User = newUserSnapshot.val();
        if (this.waitingOnNewUser && newUser.email == this.waitingOnNewUser.email) {
            this.currentUser = newUser;
            this.waitingOnNewUser = null;
            console.log('new user:');
            console.log(newUser);
            this.onUserCreated.onNext(this.currentUser);
        }
    }

    private setupObservables() {
        this.onUserLoggedIn = new Rx.Subject<User>();
        this.onUserCreated = new Rx.Subject<User>();
    }

    public attemptLogin (email: string, password: string) {
        this.backend.attemptAuth(email, password, (authData: FirebaseAuthData) => {
            this.backend.users.child(authData.uid).once('value', (user: FirebaseDataSnapshot): void => {
                if (!user.exists()) {
                    this.currentUser = null;
                    this.onUserLoggedIn.onError('Unable to get user data');
                } else {
                    this.currentUser = user.val();
                    this.onUserLoggedIn.onNext(this.currentUser);
                }
            });
        });
    }

    public createUser(name: string, email: string, password: string) {
        let user = new User(name, email);
        this.waitingOnNewUser = user;
        this.backend.createUser(user, password, (userData) => {
            console.log('new user created!');
        });
    }

    public logout() {
        this.backend.logout();
    }

    public addSkill(skillLevel: SkillLevel) {
        this.currentUser.skillLevels.push(skillLevel);
        this.update();
    }

    public addProject(projectLevel: ProjectLevel) {
        this.currentUser.projectLevels.push(projectLevel);
        this.update();
    }

    public updateSkillLevel(skillLevel: SkillLevel) {
        this.currentUser.skillLevels.push(skillLevel);
        this.update();
    }

    public updateProjectLevel(projectLevel: ProjectLevel) {
        this.currentUser.projectLevels.push(projectLevel);
        this.update();
    }

    private update() {
        this.usersRepo.child(this.currentUser.uid).update(this.currentUser);
    }
}
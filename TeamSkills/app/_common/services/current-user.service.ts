import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {User} from '../models/user.model'
import {Skill, SkillLevel} from '../models/skill.model'
import {Project, ProjectLevel} from '../models/project.model'
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CurrentUserService {

    public waitingOnNewUser: User;
    public currentUser: User;
    public onUserCreated = new Subject<User>();
    private usersRepo: Firebase;

    constructor(private backend: FireBaseService) { 
        this.listenForIncomingEvents();
        this.usersRepo = backend.users;
        this.setCurrentUser();
    }

    private setCurrentUser() {
        if (this.backend.isLoggedIn()) {
            let auth = this.backend.getLoggedInAuth();
            this.usersRepo.child(auth.uid).once(FireBaseService.VALUE, (userSnapshot) => {
                this.currentUser = userSnapshot.val();
            });
        }
    }

    private listenForIncomingEvents() {
        this.backend.users.on(FireBaseService.ADDED, this.onUserAdded);

        this.backend.authObservable.subscribe((auth: FirebaseAuthData) => {
            this.usersRepo.child(auth.uid).on(FireBaseService.VALUE, (userSnapshot) => {
                this.currentUser = userSnapshot.val();
            });
        });
    }

    private onUserAdded = (newUserSnapshot: FirebaseDataSnapshot) => {
        let newUser: User = newUserSnapshot.val();
        if (this.waitingOnNewUser && newUser.email == this.waitingOnNewUser.email) {
            this.currentUser = newUser;
            this.waitingOnNewUser = null;
            this.onUserCreated.next(this.currentUser);
        }
    }

    public attemptLogin(email: string, password: string) {
        this.backend.attemptAuth(email, password);
    }

    public createUser(name: string, email: string, password: string) {
        let user = new User(name, email);
        this.waitingOnNewUser = user;
        this.backend.createUser(user, password);
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
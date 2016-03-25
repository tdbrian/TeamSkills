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
                this.currentUser = this.normalizeUser(userSnapshot.val());
            });
        }
    }

    private listenForIncomingEvents() {
        this.backend.users.on(FireBaseService.ADDED, this.onUserAdded);

        this.backend.authObservable.subscribe((auth: FirebaseAuthData) => {
            this.usersRepo.child(auth.uid).on(FireBaseService.VALUE, (userSnapshot) => {
                this.currentUser = this.normalizeUser(userSnapshot.val());
            });
        });
    }

    private onUserAdded = (newUserSnapshot: FirebaseDataSnapshot) => {
        let newUser: User = this.normalizeUser(newUserSnapshot.val());
        if (this.waitingOnNewUser && newUser.email == this.waitingOnNewUser.email) {
            this.currentUser = newUser;
            this.waitingOnNewUser = null;
            this.onUserCreated.next(this.currentUser);
        }
    }

    private normalizeUser(user: User): User {
        user.skillLevels = user.skillLevels ? user.skillLevels : [];
        user.projectLevels = user.projectLevels ? user.projectLevels : [];
        return user;
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

    public updateProjects(projectLevels: ProjectLevel[]) {
        this.currentUser.projectLevels = projectLevels;
        this.update();
    }

    public updateSkills(skillLevels: SkillLevel[]) {
        debugger;
        this.currentUser.skillLevels = skillLevels;
        this.update();
    }

    private update() {
        let auth = this.backend.getLoggedInAuth();
        this.usersRepo.child(auth.uid).update(this.currentUser);
    }
}
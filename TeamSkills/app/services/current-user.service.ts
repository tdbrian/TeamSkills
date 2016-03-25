import {FireBaseService} from './firebase.service';
import {User} from '../models/user.model'
import {Skill, SkillLevel} from '../models/skill.model'
import {Project, ProjectLevel} from '../models/project.model'
import {Subject} from 'rxjs/Subject';

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

    public userProjectsContain(name: string): boolean {
        return this.currentUser.projectLevels.map(x => x.project.name).indexOf(name) > -1;
    }

    public toggleProject(projectName: string, level: number) {
        if (this.userProjectsContain(projectName)) {
            this.currentUser.projectLevels = this.currentUser.projectLevels.filter(x => x.project.name !== projectName);
        } else {
            let projectLevel = new ProjectLevel(<Project>{name: projectName}, level);
            this.currentUser.projectLevels.push(projectLevel);
        }
        this.currentUser.projectLevels = this.currentUser.projectLevels.filter(this.onlyUnique);
        this.update();
    }

    public updateProjects(projectLevels: ProjectLevel[]) {
        this.currentUser.projectLevels = projectLevels;
        this.update();
    }

    private userSkillsContain(name: string): boolean {
        return this.currentUser.skillLevels.map(x => x.skill.name).indexOf(name) > -1;
    }

    public toggleSkill(skillName: string, level: number) {
        if (this.userSkillsContain(skillName)) {
            this.currentUser.skillLevels = this.currentUser.skillLevels.filter(x => x.skill.name !== skillName);
        } else {
            let skillLevel = new SkillLevel(<Project>{ name: skillName }, level);
            this.currentUser.skillLevels.push(skillLevel);
        }
        this.currentUser.skillLevels = this.currentUser.skillLevels.filter(this.onlyUnique);
        this.update();
    }

    public updateSkills(skillLevels: SkillLevel[]) {
        this.currentUser.skillLevels = skillLevels;
        this.update();
    }

    private onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    private update() {
        let auth = this.backend.getLoggedInAuth();
        this.usersRepo.child(auth.uid).update(this.currentUser);
    }
}
﻿import {Injectable} from 'angular2/core';
import {User} from '../models/user.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class FireBaseService {

    static URI = "https://shining-fire-1754.firebaseio.com";
    static CHANGED = "child_changed";
    static ADDED = "child_added";
    static REMOVED = "child_removed";
    static VALUE = "value";

    static USERS = "users";
    static PROJECTS = "projects";
    static SKILLS = "skills";

    private firebase: Firebase;
    public users: Firebase;
    public projects: Firebase;
    public skills: Firebase;

    public authObservable = new Subject<FirebaseAuthData>();
    public loggedInStatus = new Subject<boolean>();

    constructor() {
        this.setupFirebaseCollections();
        this.listenForIncomingEvents();
    }

    private listenForIncomingEvents() {
        this.firebase.onAuth(this.onAuth);
    }

    private setupFirebaseCollections() {
        this.firebase = new Firebase(FireBaseService.URI);
        this.users = this.firebase.child(FireBaseService.USERS);
        this.projects = this.firebase.child(FireBaseService.PROJECTS);
        this.skills = this.firebase.child(FireBaseService.SKILLS);
    }

    private onAuth = (authData: FirebaseAuthData) => {
        if (authData) {
            this.authObservable.next(authData);
            this.loggedInStatus.next(true);
        }
    };

    public attemptAuth(email: string, password: string) {
        this.firebase.authWithPassword({
            email: email,
            password: password
        }, (err, authData: FirebaseAuthData) => {
            if (err) {
                alert(`Login Failed.. ${err.message}`);
                console.warn(err);
            }
        });
    };

    public isLoggedIn(): boolean {
        let auth = this.firebase.getAuth();
        if (auth) return true;
        return false;
    }

    public logout() {
        this.firebase.unauth();  
        this.loggedInStatus.next(false);
    }

    public createUser(user: User, password: string) {
        this.firebase.createUser({
            email: user.email,
            password: password
        }, (error, userData: any) => {
            debugger;
            if (error) {
                this.handleCreateUserError(error);
            } else {
                this.users.child(userData.uid).set(user);
            }
        });
    }

    public getLoggedInAuth(): FirebaseAuthData {
        return this.firebase.getAuth();
    }

    private handleCreateUserError(error) {
        console.error(error);
        debugger;
        switch (error.code) {
            case "EMAIL_TAKEN":
                alert("The new user account cannot be created because the email is already in use.");
                break;
            case "INVALID_EMAIL":
                alert("The specified email is not a valid email.");
                break;
            default:
                alert("Error creating user");
        }
    }

    private setNewUserData(user: User) {
        this.firebase.child(FireBaseService.USERS).child(user.uid).set(user);
    }
}
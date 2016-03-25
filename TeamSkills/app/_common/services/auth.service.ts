import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {User} from '../models/user.model'
import {Router} from 'angular2/router';

@Injectable()
export class AuthService {

    public isLoggedIn: boolean;

    constructor(private backend: FireBaseService, private router: Router) {
        this.backend.loggedInStatus.subscribe((status: boolean) => {
            this.isLoggedIn = status
            this.router.navigate(['ViewTeam']);
        });

        this.isLoggedIn = this.isAuthenticated();
    }

    isAuthenticated() {
       return this.backend.isLoggedIn();
    }

    attemptLogin(email: string, password: string) {
        this.backend.attemptAuth(email, password);
    }

    logout() {
        this.backend.logout();
        this.router.navigate(['Login']);
    }
}
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService} from '../_common/services/auth.service';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.html',
    directives: [ROUTER_DIRECTIVES]
})
export class Login {

    public email: string;
    public password: string;
    public remember: boolean;

    constructor(public auth: AuthService) {
    }

    attemptLogin() {
        this.auth.attemptLogin(this.email, this.password);
    }

    forgotPassword() {
       console.info("send email!"); 
    }
}
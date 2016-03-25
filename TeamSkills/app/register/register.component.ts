import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CurrentUserService} from '../_common/services/current-user.service';

@Component({
    selector: 'register',
    templateUrl: 'app/register/register.html',
    directives: [ROUTER_DIRECTIVES]
})
export class Register {

    public name: string;
    public password: string;
    public email: string;

    constructor(public userService: CurrentUserService) {
        userService.onUserCreated.subscribe(() => {
            alert('Your account was created! Please log in now.');
        });
    }

    attemptRegisterUser() {
        this.userService.createUser(this.name, this.email, this.password);
    }
}
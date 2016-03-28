import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService} from '../_common/services/auth.service';
import {CurrentUserService} from '../_common/services/current-user.service';

@Component({
    selector: 'app-nav',
    templateUrl: 'app/shell/nav.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppNav {
    constructor(public auth: AuthService, public userService: CurrentUserService) { }

    logout() {
        this.auth.logout();
    }
}
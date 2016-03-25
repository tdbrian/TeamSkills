import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.html',
    directives: [ROUTER_DIRECTIVES]
})
export class Login { }
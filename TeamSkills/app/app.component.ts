import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AppNav} from './shell/nav';
import {Register} from './register/register';
import {Login} from './login/login';
import {Home} from './home/home';
import {ManageSkills} from './manageSkills/manage-skills';
import {ViewTeam} from './viewTeam/view-team';

import {CurrentUserService} from './_common/services/current-user.service';
import {FireBaseService} from './_common/services/firebase.service';
import {UsersService} from './_common/services/users.service';
import {ProjectsService} from './_common/services/projects.service';
import {SkillsService} from './_common/services/skills.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [
        AppNav,
        ROUTER_DIRECTIVES
    ],
    providers: [
        CurrentUserService,
        FireBaseService
    ]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: Home, useAsDefault: true },
    { path: '/register', name: 'Register', component: Register },
    { path: '/login', name: 'Login', component: Login }
    { path: '/view-team', name: 'ViewTeam', component: ViewTeam },
    { path: '/manage-skills', name: 'ManageSkills', component: ManageSkills }
])
export class AppComponent { }
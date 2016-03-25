import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AppNav} from './shell/nav.component';
import {Register} from './register/register.component';
import {Login} from './login/login.component';
import {Home} from './home/home.component';
import {ManageSkills} from './manage/manage.component';
import {ViewTeam} from './team/view-team.component';

import {CurrentUserService} from './_common/services/current-user.service';
import {FireBaseService} from './_common/services/firebase.service';
import {UsersService} from './_common/services/users.service';
import {ProjectsService} from './_common/services/projects.service';
import {SkillsService} from './_common/services/skills.service';
import {AuthService} from './_common/services/auth.service';

@Component({ 
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [
        AppNav,
        ROUTER_DIRECTIVES
    ],
    providers: [
        CurrentUserService,
        FireBaseService,
        AuthService,
        SkillsService,
        ProjectsService,
        UsersService
    ]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: Home, useAsDefault: true },
    { path: '/register', name: 'Register', component: Register },
    { path: '/login', name: 'Login', component: Login },
    { path: '/view-team', name: 'ViewTeam', component: ViewTeam },
    { path: '/manage-skills', name: 'ManageSkills', component: ManageSkills }
])
export class AppComponent { }
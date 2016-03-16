import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ManageSkills} from './manageSkills/manage-skills';
import {ViewTeam} from './viewTeam/view-team';
import {AppNav} from './shell/nav';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [AppNav, ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/view-team', name: 'ViewTeam', component: ViewTeam, useAsDefault: true },
    { path: '/manage-skills', name: 'ManageSkills', component: ManageSkills }
])
export class AppComponent { }
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ManageSkills} from './manageSkills/manageSkills';
import {ViewTeam} from './viewTeam/viewTeam';
import {AppNav} from './shell/nav';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [AppNav, ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/viewTeam', name: 'ViewTeam', component: ViewTeam, useAsDefault: true },
    { path: '/manageSkills', name: 'ManageSkills', component: ManageSkills }
])
export class AppComponent { }
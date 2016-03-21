import {Component} from 'angular2/core';
import {ViewList} from './_components/view-list';

@Component({
    selector: 'view-team',
    templateUrl: 'app/viewTeam/view-team.html',
    directives: [ViewList]
})
export class ViewTeam { }
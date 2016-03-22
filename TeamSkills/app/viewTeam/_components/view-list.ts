import {Component, Input} from 'angular2/core';

@Component({
    selector: 'view-list',
    templateUrl: 'app/viewTeam/_components/view-list.html'
})
export class ViewList {
    @Input() list;
}
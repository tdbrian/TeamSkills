import {Component, Input} from 'angular2/core';

@Component({
    selector: 'manage-list',
    templateUrl: 'app/manageSkills/_components/manage-list.html'
})
export class ManageList {
    @Input() list: ManageListModel;
}

export type ManageListModel = {
    title: string,
    items: string[]
}
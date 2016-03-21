import {Component} from 'angular2/core';
import {ManageList} from './_components/manage-list';

@Component({
    selector: 'manage-skills',
    templateUrl: 'app/manageSkills/manage-skills.html',
    directives: [ManageList]
})
export class ManageSkills { }
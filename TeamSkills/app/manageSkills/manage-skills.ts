import {Component} from 'angular2/core';
import {ManageList} from './_components/manage-list';

@Component({
    selector: 'manage-skills',
    templateUrl: 'app/manageSkills/manage-skills.html',
    directives: [ManageList]
})
export class ManageSkills {
    skills: ManageListModel
    = {
        title: "Skills",
        items: ["Angular", "C#", "Octopus"]
    }
    projects = {
        title: "Projects",
        items: ["Supportal", "Monsoon", "SecureTide"]
    }
}
export type ManageListModel = {
    title: string,
    items: string[]
}

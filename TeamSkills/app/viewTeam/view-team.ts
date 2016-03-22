import {Component} from 'angular2/core';
import {ViewList} from './_components/view-list';

@Component({
    selector: 'view-team',
    templateUrl: 'app/viewTeam/view-team.html',
    directives: [ViewList]
})
export class ViewTeam {
    team = {
        title: "Team",
        items: ["Thomas Brian", "Leif Thillet", "Shane Drye"]
    }
    skills = {
        title: "Skills",
        items: ["Angular", "C#", "Octopus"]
    }
    projects = {
        title: "Projects",
        items: ["Supportal", "Monsoon", "SecureTide"]
    }
}
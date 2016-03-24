import {Component, Input} from 'angular2/core';
import {ManageList} from './_components/manage-list';

@Component({
    selector: 'manage-skills',
    templateUrl: 'app/manageSkills/manage-skills.html',
    directives: [ManageList]
})
export class ManageSkills {
    @Input() user;
    //fake data
    skills = {
        title: "Skills",
        items: ["Angular", "C#", "Octopus"]
    }
    projects = {
        title: "Projects",
        items: ["Supportal", "Monsoon", "SecureTide"]
    }
    me = {
        name: "shane",
        email: "sdrye@appriver.com",
        skills: ["Angular", "C#"],
        projects: ["Supportal", "SecureTide"]
    }

    onAddOrRemove(event) {
        if (event.item.isSelected == true) {
            this.me.skills = [...this.me.skills].filter(x => x != event.item.value);
        }
        if (event.item.isSelected == false) {
            this.me.skills = [...this.me.skills, event.item];
        }
        
    }
} 

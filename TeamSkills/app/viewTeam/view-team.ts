import {Component, Input} from 'angular2/core';
import {ViewList} from './_components/view-list';
import {User} from '../_common/models/user.model';
import {Skill} from '../_common/models/skill.model';
import {Project} from '../_common/models/project.model';

@Component({
    selector: 'view-team',
    templateUrl: 'app/viewTeam/view-team.html',
    directives: [ViewList]
})
export class ViewTeam {
    @Input() team;
    @Input() skills;
    @Input() projects;

    filter: {};
    constructor() {
        this.filter = {type: "none"}
        //fake data
        var supportal = new Project("Supportal");
        var monsoon = new Project("Monsoon");
        var secureTide = new Project("SecureTide");

        var angular = new Skill("Angular");
        var cSharp = new Skill("C#");
        var octopus = new Skill("Octopus");
         
        var thomas = new User("Thomas Brian", "tbrian@appriver.com");
        var leif = new User("Leif Thillet", "lthillet@appriver.com");
        var shane = new User("Shane Drye", "sdrye@appriver.com");

        thomas.skills = [angular];
        thomas.projects = [supportal];
        leif.skills = [cSharp];
        leif.projects = [monsoon];
        shane.skills = [octopus];
        shane.projects = [secureTide];

        this.team = {
            title: "Team",
            items: [thomas, leif, shane]
        }
        this.skills = {
            title: "Skills",
            items: [angular, cSharp, octopus]
        }
        this.projects = {
            title: "Projects",
            items: [supportal, monsoon, secureTide]
        }
    }

    onUpdateTeam(item) {
        this.team.items = [item];
        this.skills.items = [...this.skills.items].filter(x => item.skills.includes(x));
        this.projects.items = [...this.projects.items].filter(x => item.projects.includes(x));
    }

    onUpdateSkill(item) {
        this.team.items = [...this.team.items].filter(x => x.skills.includes(item));
        this.skills.items = [item];
        this.projects.items = [];
    }

    onUpdateProject(item) {
        this.team.items = [...this.team.items].filter(x => x.projects.includes(item));
        this.skills.items = [];
        this.projects.items = [item];
    }
}
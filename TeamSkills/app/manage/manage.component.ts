import {Component, Input} from 'angular2/core';
import {ManageList} from './_components/manage-list.component';
import {AuthService} from '../_common/services/auth.service';
import {User} from '../_common/models/user.model';
import {Skill} from '../_common/models/skill.model';
import {Project} from '../_common/models/project.model';

@Component({
    selector: 'manage-skills',
    templateUrl: 'app/manage/manage.html',
    directives: [ManageList]
})
export class ManageSkills {
    @Input() user;
    @Input() skills;
    @Input() projects;

    constructor(private authService: AuthService) {
        //fake data
        var supportal = new Project("Supportal");
        var monsoon = new Project("Monsoon");
        var secureTide = new Project("SecureTide");

        var angular = new Skill("Angular");
        var cSharp = new Skill("C#");
        var octopus = new Skill("Octopus");

        this.user = new User("Shane Drye", "sdrye@appriver.com");
        this.user.skills = [octopus];
        this.user.projects = [secureTide];
        this.skills = {
            title: "Skills",
            items: [angular, cSharp, octopus]
        }
        this.projects = {
            title: "Projects",
            items: [supportal, monsoon, secureTide]
        }
    }

    // needs to use skill service to add or remove 
    onAddOrRemoveSkill(item) {
        if (item.isSelected == true) {
            this.user.skills = [...this.user.skills].filter(x => x.name != item.name);
        }
        if (item.isSelected == false) {
            var newSkill = new Skill(item.name);
            this.user.skills = [...this.user.skills, newSkill];
        }
    }

    onAddOrRemoveProject(item) {
        if (item.isSelected == true) {
            this.user.projects = [...this.user.projects].filter(x => x.name != item.name);
        }
        if (item.isSelected == false) {
            var newProject = new Skill(item.name);
            this.user.projects = [...this.user.projects, newProject];
        }
    }
} 

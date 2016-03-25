import {OnActivate, Router} from 'angular2/router';
import {Component, Input} from 'angular2/core';
import {ViewList} from './_components/view-list.component';
import {User} from '../_common/models/user.model';
import {AuthService} from '../_common/services/auth.service';
import {Skill, SkillLevel} from '../_common/models/skill.model';
import {Project, ProjectLevel} from '../_common/models/project.model';

@Component({
    selector: 'view-team',
    templateUrl: 'app/team/view-team.html',
    directives: [ViewList]
})
export class ViewTeam implements OnActivate {
    @Input() team;
    @Input() skills;
    @Input() projects;

    filter: {};
    constructor(private router: Router, private authService: AuthService) {

        this.filter = { type: "none" }
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

        thomas.skillLevels = [new SkillLevel(angular, 3)];
        thomas.projectLevels = [new ProjectLevel(supportal, 3)];
        leif.skillLevels = [new SkillLevel(cSharp, 3)];
        leif.projectLevels = [new ProjectLevel(monsoon, 3)];
        shane.skillLevels = [new SkillLevel(octopus, 3)];
        shane.projectLevels = [new ProjectLevel(secureTide, 3)];

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

    routerOnActivate() {
        let status = this.authService.isAuthenticated();
        if (!status) this.router.navigate(['Login']);
    }

    onUpdateTeam(item) {
        var teamTop = item;
        var teamBottom = this.team.items.filter(x => x.name != item.name);
        this.team.items = this.grayedOut([teamTop], teamBottom);

        var skillsTop = this.skills.items.filter(x => item.skillLevels.map(x => x.skill).includes(x));
        var skillsBottom = this.skills.items.filter(x => !item.skillLevels.map(x => x.skill).includes(x));
        this.skills.items = this.grayedOut(skillsTop, skillsBottom);

        var projectsTop = this.projects.items.filter(x => item.projectLevels.map(x => x.project).includes(x));
        var projectsBottom = this.projects.items.filter(x => !item.projectLevels.map(x => x.project).includes(x));
        this.projects.items = this.grayedOut(projectsTop, projectsBottom);
    }

    onUpdateSkill(item) {
        var teamTop = this.team.items.filter(x => x.skillLevels.map(x => x.skill).includes(item));
        var teamBottom = this.team.items.filter(x => !x.skillLevels.map(x => x.skill).includes(item));
        this.team.items = this.grayedOut(teamTop, teamBottom);

        var skillsTop = item;
        var skillsBottom = this.skills.items.filter(x => x.name != item.name)
        this.skills.items = this.grayedOut([skillsTop], skillsBottom)

        this.projects.items = this.grayedOut([], this.projects.items);
    }

    onUpdateProject(item) {
        var teamTop = this.team.items.filter(x => x.projectLevels.map(x => x.project).includes(item));
        var teamBottom = this.team.items.filter(x => !x.projectLevels.map(x => x.project).includes(item));
        this.team.items = this.grayedOut(teamTop, teamBottom);

        var projectsTop = item;
        var projectsBottom = this.projects.items.filter(x => x.name != item.name)
        this.projects.items = this.grayedOut([projectsTop], projectsBottom)

        this.skills.items = this.grayedOut([], this.skills.items);
    }

    private grayedOut(top, bottom) {
        top = top.map(x => {
            x['grayedOut'] = false;
            return x;
        });
        bottom = bottom.map(x => {
            x['grayedOut'] = true;
            return x;
        });
        return [...top, ...bottom]
    }
}
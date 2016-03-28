import {OnActivate, Router} from 'angular2/router';
import {Component, Input} from 'angular2/core';

// Sub components
import {ViewList} from './_components/view-list.component';

// Models
import {User} from '../_common/models/user.model';
import {AuthService} from '../_common/services/auth.service';
import {Skill, SkillLevel} from '../_common/models/skill.model';
import {Project, ProjectLevel} from '../_common/models/project.model';

// Services
import {UsersService} from '../_common/services/users.service'
import {SkillsService} from '../_common/services/skills.service'
import {ProjectsService} from '../_common/services/projects.service'

@Component({
    selector: 'view-team',
    templateUrl: 'app/team/view-team.html',
    directives: [ViewList]
})
export class ViewTeam implements OnActivate {
    public filter: {};

    constructor(
        private router: Router,
        private authService: AuthService,
        private usersService: UsersService,
        private skillsService: SkillsService,
        private projectsService: ProjectsService) {

        this.filter = { type: "none" }
    }

    routerOnActivate() {
        let status = this.authService.isAuthenticated();
        if (!status) this.router.navigate(['Login']);
    }

    onUpdateTeam(user: User) {
        var teamTop = user;
        var teamBottom = this.usersService.users.filter(x => x.name != user.name);
        this.usersService.users = this.grayedOut([teamTop], teamBottom);

        if (user.skillLevels == null || user.skillLevels == undefined) {
            this.grayedWithoutStars([], this.skillsService.skills);
        } else {
            var skillsTop = this.skillsService.skills.filter(x => user.skillLevels.map(level => level.skill.name).includes(x.name));
            var skillsBottom = this.skillsService.skills.filter(x => !user.skillLevels.map(level => level.skill.name).includes(x.name));
            this.skillsService.skills = this.skillsWithStars(user, skillsTop, skillsBottom);
        }
        
        if (user.projectLevels == null || user.projectLevels == undefined) {
            this.projectsService.projects = this.grayedWithoutStars([], this.projectsService.projects);
        } else {
            var projectsTop = this.projectsService.projects.filter(x => user.projectLevels.map(level => level.project.name).includes(x.name));
            var projectsBottom = this.projectsService.projects.filter(x => !user.projectLevels.map(level => level.project.name).includes(x.name));
            this.projectsService.projects = this.projectsWithStars(user, projectsTop, projectsBottom);
        }

        
    }

    onUpdateSkill(skill: Skill) {
        var teamTop = this.usersService.users.filter(x => x.skillLevels.map(level => level.skill.name).includes(skill.name));
        var teamBottom = this.usersService.users.filter(x => !x.skillLevels.map(level => level.skill.name).includes(skill.name));
        this.usersService.users = this.usersWithSkillStars(skill, teamTop, teamBottom);

        var skillsTop = skill;
        var skillsBottom = this.skillsService.skills.filter(x => x.name != skill.name);
        this.skillsService.skills = this.grayedWithoutStars([skillsTop], skillsBottom);

        this.projectsService.projects = this.grayedWithoutStars([], this.projectsService.projects);
    }

    onUpdateProject(project: Project) {
        var teamTop = this.usersService.users.filter(x => x.projectLevels.map(x => x.project.name).includes(project.name));
        var teamBottom = this.usersService.users.filter(x => !x.projectLevels.map(x => x.project.name).includes(project.name));
        this.usersService.users = this.usersWithProjectStars(project, teamTop, teamBottom);

        var projectsTop = project;
        var projectsBottom = this.projectsService.projects.filter(x => x.name != project.name);
        this.projectsService.projects = this.grayedWithoutStars([projectsTop], projectsBottom);

        this.skillsService.skills = this.grayedWithoutStars([], this.skillsService.skills);
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

    private grayedWithoutStars(top, bottom) {
        top = top.map(x => {
            x['showRating'] = false;
            x['rating'] = 0;
            return x;
        });
        bottom = bottom.map(x => {
            x['showRating'] = false;
            x['rating'] = 0;
            return x;
        });
        return this.grayedOut(top, bottom)
    }

    private skillsWithStars(user: User, top: Skill[], bottom: Skill[]) {
        console.info(user)
        top = top.map(x => {
            x['showRating'] = true;
            x['rating'] = user.skillLevels.filter(y => y.skill.name == x.name)[0].level;
            return x;
        });
        bottom = bottom.map(x => {
            x['showRating'] = false;
            x['rating'] = 0;
            return x;
        });
        return this.grayedOut(top, bottom);
    }

    private projectsWithStars(user: User, top: Project[], bottom: Project[]) {
        top = top.map(x => {
            x['showRating'] = true;
            x['rating'] = user.projectLevels.filter(y => y.project.name == x.name)[0].level;
            return x;
        });
        bottom = bottom.map(x => {
            x['showRating'] = false;
            x['rating'] = 0;
            return x;
        });
        return this.grayedOut(top, bottom);
    }

    private usersWithSkillStars(skill: Skill, top: User[], bottom: User[]) {
        top = top.map((x: User) => {
            x['showRating'] = true;
            x['rating'] = x.skillLevels.filter(y => y.skill.name == skill.name)[0].level;
            return x;
        });
        bottom = bottom.map(x => {
            x['showRating'] = false;
            x['rating'] = 0;
            return x;
        });
        return this.grayedOut(top, bottom);
    }

    private usersWithProjectStars(project: Project, top: User[], bottom: User[]) {
        top = top.map((x: User) => {
            x['showRating'] = true;
            x['rating'] = x.projectLevels.filter(y => y.project.name == project.name)[0].level;
            return x;
        });
        bottom = bottom.map(x => {
            x['showRating'] = false;
            x['rating'] = 0;
            return x;
        });
        return this.grayedOut(top, bottom);
    }
}
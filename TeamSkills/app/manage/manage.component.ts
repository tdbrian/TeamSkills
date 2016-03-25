import {Component, Input} from 'angular2/core';

// Sub Components
import {ManageList} from './_components/manage-list.component';

// Models
import {User} from '../_common/models/user.model';
import {Skill, SkillLevel} from '../_common/models/skill.model';
import {Project, ProjectLevel} from '../_common/models/project.model';

// Services
import {AuthService} from '../_common/services/auth.service';
import {ProjectsService} from '../_common/services/projects.service';
import {SkillsService} from '../_common/services/skills.service';
import {CurrentUserService} from '../_common/services/current-user.service';

@Component({
    selector: 'manage-skills',
    templateUrl: 'app/manage/manage.html',
    directives: [ManageList]
})
export class ManageSkills {
    public user: User;
    public skills: Skill[];
    public projects: Project[];

    constructor(private authService: AuthService,
        private skillsService: SkillsService,
        private projectsService: ProjectsService,
        private userService: CurrentUserService) {

        this.user = userService.currentUser;
        this.skills = skillsService.skills;
        this.projects = projectsService.projects;
    }

    onAddOrRemoveSkill(item) {
        if (item.isSelected == true) {
            this.user.skillLevels = [...this.user.skillLevels].filter(x => x.skill.name != item.name);
        }
        if (item.isSelected == false) {
            var newSkill = new SkillLevel(item.name, item.level);
            this.user.skillLevels = [...this.user.skillLevels, newSkill];
        }
        this.userService.updateSkills(this.user.skillLevels);
    }

    onAddOrRemoveProject(item) {
        if (item.isSelected == true) {
            this.user.projectLevels = [...this.user.projectLevels].filter(x => x.project.name != item.name);
        }
        if (item.isSelected == false) {
            var newProject = new ProjectLevel(item.name, item.level);
            this.user.projectLevels = [...this.user.projectLevels, newProject];
        }
        this.userService.updateProjects(this.user.projectLevels);
    }
} 

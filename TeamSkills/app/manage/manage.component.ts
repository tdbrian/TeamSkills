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

    constructor(private authService: AuthService,
        private skillsService: SkillsService,
        private projectsService: ProjectsService,
        private userService: CurrentUserService) {
    }

    onAddOrRemoveSkill(skillName: string) {
        debugger;
        console.info(this.userService);
        this.userService.toggleSkill(skillName, 1);
    }

    onAddOrRemoveProject(projectName: string) {
        this.userService.toggleProject(projectName, 1);
    }
}

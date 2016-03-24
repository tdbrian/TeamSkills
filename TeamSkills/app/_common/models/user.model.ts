import {Project, ProjectLevels} from './project.model';
import {Skill, SkillLevel} from './skill.model';

export class User {
    uid: string;
    name: string;
    email: string;
    projectLevels: ProjectLevels[];
    skillLevels: SkillLevel[];

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.projectLevels = [];
        this.skillLevels = [];
    }
}
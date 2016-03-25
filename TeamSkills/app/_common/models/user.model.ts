import {Project, ProjectLevel} from './project.model';
import {Skill, SkillLevel} from './skill.model';

export class User {
    uid: string;
    name: string;
    email: string;
    projectLevels: ProjectLevel[];
    skillLevels: SkillLevel[];

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.projectLevels = [];
        this.skillLevels = [];
    }
}
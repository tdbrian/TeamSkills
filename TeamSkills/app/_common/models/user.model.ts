import {Project} from './project.model';
import {Skill} from './skill.model';

export class User {
    uid: string;
    name: string;
    email: string;
    projects: Project[];
    skill: Skill[];

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.projects = [];
        this.skill = [];
    }
}
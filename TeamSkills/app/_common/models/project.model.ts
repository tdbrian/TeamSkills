export class Project {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class ProjectLevel {
    public project: Project;
    public level: number;

    constructor(project: Project, level: number) {
        this.project = project;
        this.level = this.level;
    } 
}
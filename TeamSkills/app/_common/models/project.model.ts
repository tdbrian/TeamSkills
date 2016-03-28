export class Project {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class ProjectLevel {
    public project: Project;
    public level: number; 
    public name: string;
    constructor(project: Project, level: number) { 
        this.project = project;
        this.level = level;
        this.name = project.name;
    } 
}
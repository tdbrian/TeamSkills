export class Project {
    private name: string

    constructor(name: string) {
        this.name = name;
    }
}

export class ProjectLevel {
    private project: Project;
    private level: number;

    constructor(project: Project, level: number) {
        this.project = project;
        this.level = this.level;
    }
}
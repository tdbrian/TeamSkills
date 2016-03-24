import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {Project} from '../models/project.model';

@Injectable()
export class ProjectsService {

    private projectsRepo: Firebase;
    public onProjects: Rx.Subject<Project[]>;

    constructor(private backend: FireBaseService) { 
        this.projectsRepo = backend.projects;
        this.setupObservables();
        this.listenForIncomingEvents();
    }

    private setupObservables() {
        this.onProjects = new Rx.Subject<Project[]>();
    }

    private listenForIncomingEvents() {
        this.projectsRepo.on(FireBaseService.VALUE, this.onProjectsChanged);
    }

    private onProjectsChanged(projectsSnapshot: FirebaseDataSnapshot) {
        this.onProjects.onNext(projectsSnapshot.val());
    }

    public addProject = (name: string) => {
        let project = new Project(name);
        this.projectsRepo.push(project);
    }
}
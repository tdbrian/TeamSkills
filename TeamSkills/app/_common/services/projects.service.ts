import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {Project} from '../models/project.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ProjectsService {

    private projectsRepo: Firebase;
    public onProjects = new Subject<Project[]>();

    constructor(private backend: FireBaseService) { 
        this.projectsRepo = backend.projects;
        this.listenForIncomingEvents();
    }

    private listenForIncomingEvents() {
        this.projectsRepo.on(FireBaseService.VALUE, this.onProjectsChanged);
    }

    private onProjectsChanged(projectsSnapshot: FirebaseDataSnapshot) {
        this.onProjects.next(projectsSnapshot.val());
    }

    public addProject = (name: string) => {
        let project = new Project(name);
        this.projectsRepo.push(project);
    }
}
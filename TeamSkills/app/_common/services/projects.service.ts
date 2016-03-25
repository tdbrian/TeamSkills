import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {Project} from '../models/project.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ProjectsService {

    private projectsRepo: Firebase;
    public projects: Project[] = [];

    constructor(private backend: FireBaseService) { 
        this.projectsRepo = backend.projects;
        this.listenForIncomingEvents();
    }

    private listenForIncomingEvents() {
        this.projectsRepo.on(FireBaseService.VALUE, this.onProjectsChanged);
    }

    private onProjectsChanged = (projectsSnapshot: FirebaseDataSnapshot) => {
        this.projects = projectsSnapshot.val();
        console.info(this.projects);
    }

    public updateProjects = (projects: Project[]) => {
        this.projectsRepo.update(projects);
    }
}
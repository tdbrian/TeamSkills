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
        let projectsList: string[] = projectsSnapshot.val();
        this.projects = projectsList.map(x => <Project>{ name: x });
    }

    public updateProjects = (projects: Project[]) => {
        this.projectsRepo.update(projects);
    }
}
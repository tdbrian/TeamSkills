import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {Project} from '../models/project.model';

@Injectable()
export class ProjectsService {

    constructor(private firebaseService: FireBaseService) { 
    }

    public addProject = (name: string) => {
        let project = new Project();
        project.name = name;
    }
}
import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {Skill} from '../models/skill.model';

@Injectable()
export class SkillsService {

    constructor(private firebaseService: FireBaseService) { 
    }

    public addSkill = (name: string) => {
        let skill = new Skill();
        skill.name = name;
    }
}
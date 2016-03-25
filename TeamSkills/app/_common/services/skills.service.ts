import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {Skill} from '../models/skill.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SkillsService {

    private skillsRepo: Firebase;
    public skills: Skill[] = [];

    constructor(private backend: FireBaseService) { 
        this.skillsRepo = backend.skills;
        this.listenForIncomingEvents()
    }

    private listenForIncomingEvents() {
        this.skillsRepo.on(FireBaseService.VALUE, this.onSkillsChanged);
    }

    private onSkillsChanged = (skillsSnapshot: FirebaseDataSnapshot) => {
        this.skills = skillsSnapshot.val();
        console.info(this.skills);
    }

    public updateSkills = (skills: Skill[]) => {
        this.skillsRepo.update(skills);
    }
}
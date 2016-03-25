import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {Skill} from '../models/skill.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SkillsService {

    private skillsRepo: Firebase;
    public onSkills = new Subject<Skill[]>();

    constructor(private backend: FireBaseService) { 
        this.skillsRepo = backend.skills;
        this.listenForIncomingEvents()
    }

    private listenForIncomingEvents() {
        this.skillsRepo.on(FireBaseService.VALUE, this.onSkillsChanged);
    }

    private onSkillsChanged(skillsSnapshot: FirebaseDataSnapshot) {
        this.onSkills.next(skillsSnapshot.val());
    }

    public addSkill = (name: string) => {
        let skill = new Skill(name);
        this.skillsRepo.push(skill);
    }
}
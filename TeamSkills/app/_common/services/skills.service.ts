import {Injectable} from 'angular2/core';
import {FireBaseService} from './firebase.service';
import {Skill} from '../models/skill.model';

@Injectable()
export class SkillsService {

    private skillsRepo: Firebase;
    public onSkills: Rx.Subject<Skill[]>;

    constructor(private backend: FireBaseService) { 
        this.skillsRepo = backend.skills;
        this.setupObservables();
        this.listenForIncomingEvents()
    }

    private setupObservables() {
        this.onSkills = new Rx.Subject<Skill[]>();
    }

    private listenForIncomingEvents() {
        this.skillsRepo.on(FireBaseService.VALUE, this.onSkillsChanged);
    }

    private onSkillsChanged(skillsSnapshot: FirebaseDataSnapshot) {
        this.onSkills.onNext(skillsSnapshot.val());
    }

    public addSkill = (name: string) => {
        let skill = new Skill(name);
        this.skillsRepo.push(skill);
    }
}
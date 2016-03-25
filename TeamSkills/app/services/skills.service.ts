import {FireBaseService} from './firebase.service';
import {Skill} from '../models/skill.model';
import {Subject} from 'rxjs/Subject';

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
        let skillList: string[] = skillsSnapshot.val();
        this.skills = skillList.map(x => <Skill>{ name: x });
    }

    public updateSkills = (skills: Skill[]) => {
        this.skillsRepo.update(skills);
    }
}
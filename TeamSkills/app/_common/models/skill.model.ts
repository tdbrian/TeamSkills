export class Skill {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class SkillLevel { 
    public skill: Skill;
    public level: number;
    public name: string;

    constructor(skill: Skill, level: number) {
        this.skill = skill;
        this.level = level;
        this.name = skill.name;
    }
}
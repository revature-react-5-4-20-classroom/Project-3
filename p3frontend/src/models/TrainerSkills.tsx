import {Skill} from '../models/Skill';

export class TrainerSkills {
    skillSetId: number;
    skillSetName: string;
    skills: Skill[];

    constructor(skillSetId:number, skillSetName:string, skills:Skill[]){
        this.skillSetId = skillSetId;
        this.skillSetName = skillSetName;
        this.skills = skills;
    }
}
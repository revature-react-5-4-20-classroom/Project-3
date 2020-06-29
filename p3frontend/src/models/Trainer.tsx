import {TrainerSkills} from '../models/TrainerSkills';

export class Trainer{
    trainerId:number;
    firstName: string;
    lastName:string;
    email:string;
    trainerSkillSetId:number;
    trainerSkills:TrainerSkills;



    constructor(
       trainerId:number,
       firstName:string,
       lastName: string,
       email:string,
       trainerSkillSetId:number,
       trainerSkills:TrainerSkills
    ) 
    {
        this.trainerId = trainerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email= email;
        this.trainerSkillSetId = trainerSkillSetId;
        this.trainerSkills = trainerSkills;
    }
}
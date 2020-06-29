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

/*
    trainerGetName(trainerObject)

    returns:
        the full name of the trainer using the first and last name.
        'no-trainer' if trainerObject is null
*/
export function trainerGetName(t:Trainer)
{
    return t?t.firstName+' '+t.lastName:'no-trainer'
}
import {TrainerSkills} from '../models/TrainerSkills';
import {ConsentTrainerClassHelper} from '../models/ConsentTrainerClassHelper';
import {Batch} from '../models/Batch';

export class Trainer{
    trainerId:number;
    firstName: string;
    lastName:string;
    email:string;
    trainerSkills:TrainerSkills;
    consent:ConsentTrainerClassHelper;
    batch:Batch[];
    isEligible: boolean

    constructor(
       trainerId:number,
       firstName:string,
       lastName: string,
       email:string,
       trainerSkills:TrainerSkills,
       consent:ConsentTrainerClassHelper,
       batch:Batch[],
       isEligible:boolean
    ) 
    {
        this.trainerId = trainerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email= email;
        this.trainerSkills = trainerSkills;
        this.consent = consent;
        this.batch = batch;
        this.isEligible = isEligible;
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
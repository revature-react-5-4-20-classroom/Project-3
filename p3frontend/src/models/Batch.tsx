import { Trainer } from "./Trainer";
import { Curriculum } from "./Curriculum";
import { Associate } from "./Associate";
import { Consent } from "./Consent";
// NEEDS TO BE UPDATED
export class Batch{
    batchId:number;
    startDate:string;
    endDate:string;
    isConfirmed:boolean;
    interviewScoreLower:number;
<<<<<<< HEAD
    //trainer : Trainer;
    trainers: Trainer[];//the server is sending an array of trainers. 6/26/20
=======
    trainers : Trainer[];
>>>>>>> e48a0ceeb3b493a82f4496441a7bd15470b563e7
    location : Location;
    curriculum : Curriculum;
    associates : Associate[];
    consent : Consent[];

    constructor(
       batchId:number,
       startDate:string,
       endDate: string,

       isConfirmed:boolean,
       interviewScoreLower:number,
<<<<<<< HEAD
       //trainer : Trainer,
       
       trainers: Trainer[],
=======
       trainers : Trainer[],
>>>>>>> e48a0ceeb3b493a82f4496441a7bd15470b563e7
       location : Location,
       curriculum : Curriculum,
       associates : Associate[],
       consent : Consent[]
    ) 
    {
        this.batchId = batchId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isConfirmed= isConfirmed;
        this.interviewScoreLower = interviewScoreLower;
<<<<<<< HEAD
        //this.trainer = trainer;
=======
>>>>>>> e48a0ceeb3b493a82f4496441a7bd15470b563e7
        this.trainers = trainers;
        this.location = location;
        this.curriculum = curriculum;
        this.associates = associates;
        this.consent = consent;
    }
}
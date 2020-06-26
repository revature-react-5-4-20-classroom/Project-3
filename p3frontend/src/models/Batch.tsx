import { Trainer } from "./Trainer";
import { Curriculum } from "./Curriculum";
import { Associate } from "./Associate";
// NEEDS TO BE UPDATED
export class Batch{
    batchId:number;
    startDate:string;
    endDate:string;
    isConfirmed:boolean;
    interviewScoreLower:number;
    //trainer : Trainer;
    trainers: Trainer[];//the server is sending an array of trainers. 6/26/20
    location : Location;
    curriculum : Curriculum;
    associates : Associate[];

    constructor(
       batchId:number,
       startDate:string,
       endDate: string,

       isConfirmed:boolean,
       interviewScoreLower:number,
       //trainer : Trainer,
       
       trainers: Trainer[],
       location : Location,
       curriculum : Curriculum,
       associates : Associate[]
    ) 
    {
        this.batchId = batchId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isConfirmed= isConfirmed;
        this.interviewScoreLower = interviewScoreLower;
        //this.trainer = trainer;
        this.trainers = trainers;
        this.location = location;
        this.curriculum = curriculum;
        this.associates = associates;
    }
}
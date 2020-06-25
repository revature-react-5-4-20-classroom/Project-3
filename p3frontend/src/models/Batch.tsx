import { Trainer } from "./Trainer";
import { Curriculum } from "./Curriculum";
import { Associate } from "./Associate";

export class Batch{
    batchId:number;
    startDate:string;
    endDate:string;
    isConfirmed:boolean;
    interviewScoreLower:number;
    trainer : Trainer;
    location : Location;
    curriculum : Curriculum;
    associates : Associate[];

    constructor(
       batchId:number,
       startDate:string,
       endDate: string,
       isConfirmed:boolean,
       interviewScoreLower:number,
       trainer : Trainer,
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
        this.trainer = trainer;
        this.location = location;
        this.curriculum = curriculum;
        this.associates = associates;
    }
}
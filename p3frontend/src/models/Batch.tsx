import { Trainer } from "./Trainer";
import { Curriculum } from "./Curriculum";
import { Associate } from "./Associate";
import { Consent } from "./Consent";

export class Batch{
    batchId:number;
    startDate:string;
    endDate:string;
    isConfirmed:boolean;
    interviewScoreLower:number;
    trainers: Trainer[];
    location : Location;
    curriculum : Curriculum;
    associates : Associate[];
    programType : string;

    constructor(
       batchId:number,
       startDate:string,
       endDate: string,
       isConfirmed:boolean,
       interviewScoreLower:number,
       trainers: Trainer[],
       location : Location,
       curriculum : Curriculum,
       associates : Associate[],
       programType : string
    ) 
    {
        this.batchId = batchId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isConfirmed= isConfirmed;
        this.interviewScoreLower = interviewScoreLower;
        this.trainers = trainers;
        this.location = location;
        this.curriculum = curriculum;
        this.associates = associates;
        this.programType = programType;
    }
}
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
    consent : Consent[];

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
       consent : Consent[]
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
        this.consent = consent;
    }
}
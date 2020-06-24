export class Batch{
    batchId:number;
    curriculum: string;
    startDate:string;
    endDate:string;
    isConfirmed:boolean;
    interview_score_lower:number;


    constructor(
       batchId:number,
       curriculum:string,
       startDate:string,
       endDate: string,
       isConfirmed:boolean,
       interview_score_lower:number
    ) 
    {
        this.batchId = batchId;
        this.curriculum = curriculum;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isConfirmed= isConfirmed;
        this.interview_score_lower = interview_score_lower;
    }
}
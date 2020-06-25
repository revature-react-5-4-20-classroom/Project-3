export class Consent{
    consentId : number;
    trainerId: number;
    isApproved: boolean|null;
    batchId: number


    constructor(consentId:number, trainerId:number, isApproved:boolean|null, batchId:number){
        this.consentId = consentId;
        this.trainerId = trainerId;
        this.isApproved  = isApproved;
        this.batchId = batchId;
    }
}
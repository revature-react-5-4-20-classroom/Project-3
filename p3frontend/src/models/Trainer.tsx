export class Trainer{
    trainerId:number;
    currentBatchId:number;
    firstName: string;
    lastName:string;
    email:string;


    constructor(
       trainerId:number,
       currentBatch:number,
       firstName:string,
       lastName: string,
       email:string,
    ) 
    {
        this.trainerId = trainerId;
        this.currentBatchId = currentBatch;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email= email;
    }
}
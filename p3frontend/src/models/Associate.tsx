export default class Associate {
    associateId:number;
    firstName: String;
    lastName:String;
    email:String;
    active: boolean;
    interviewScore: number;
    assignedBatchId: number;



    constructor(
        associateId:number,
        firstName: String,
        lastName:String,
        email:String,
        active: boolean,
        interviewScore: number,
        assignedBatchId: number
    ) 
    {
        this.associateId = associateId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email= email;
        this.active = active;
        this.interviewScore = interviewScore;
        this.assignedBatchId = assignedBatchId;
    } 
}
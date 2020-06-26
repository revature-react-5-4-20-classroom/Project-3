import { Batch } from "./Batch";

export class Associate {
    associateId : number;
    firstName : string;
    lastName : string;
    email : string;
    active : boolean;
    interviewScore : number;
    batch : Batch;

    constructor(
        associateId : number,
        firstName : string,
        lastName : string,
        email : string, 
        active : boolean,
        interviewScore : number,
        batch : Batch
    ) {
        this.associateId = associateId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.active = active;
        this.interviewScore = interviewScore;
        this.batch = batch;
    }
}
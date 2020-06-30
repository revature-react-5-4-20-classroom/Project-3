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

/*
    associatesGetActive(arrayOfAssociates,boolFindActive)

    returns an array of associates that match boolFindActive.
    when boolFindActive is true, active associates will be returned
    when boolFindActive is false, inactive associates will be returned
*/
export function associatesGetActive(associates:Associate[],boolFindActive:boolean)
{
    return associates.filter((associate:Associate)=>
    {
        return associate.active===boolFindActive
    })
}

/*
    associatesGetActiveTotal(arrayOfAssociates,boolFindActive)

    when boolFindActive is true;  returns the number of active associates
    when boolFindActive is false; returns the number of IN-active associates
*/
export function associatesGetActiveTotal(associates:Associate[],boolFindActive:boolean)
{
    return(associatesGetActive(associates,boolFindActive).length);
}
import {Trainer} from '../models/Trainer';
import {Batch} from '../models/Batch';

export class Consent{
    consentId : number;
    trainer: Trainer;
    isApproved: boolean|null;
    batch: Batch
    


    constructor(consentId:number, trainer:Trainer, isApproved:boolean|null, batch:Batch){
        this.consentId = consentId;
        this.trainer = trainer;
        this.isApproved  = isApproved;
        this.batch = batch;
    }
}
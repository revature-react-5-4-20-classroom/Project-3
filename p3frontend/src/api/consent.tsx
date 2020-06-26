import {Consent} from '../models/Consent'
import { Trainer } from '../models/Trainer';
import { axiosClient } from './axios';

export async function getEligibility(trainer:Trainer, batchId:number): Promise<boolean>{

    const response : boolean = await axiosClient.get(`/trainer/eligible/${batchId}`,{
        params: {
          trainer: trainer,
        }
      })
      return response;
}

export async function assignTrainer(trainerId : number, batchId : number){
    const repsone = await axiosClient.post('/trainerbatch', {trainerId:trainerId, batchId:batchId});
}


export async function getAllTrainers() : Promise<any[]>{
    try{
        const response =  await axiosClient.get('/trainer');
        return response.data.map((trainerObj: any) => {
            const {trainerId, firstName, lastName, email, trainerSkillSetId, trainerSkills  } = trainerObj;
            return new Trainer(trainerId,firstName, lastName, email, trainerSkillSetId, trainerSkills);
         })
    } catch (e){
        console.log(e)
        throw e;
    }
}
export async function createConsentRequest(trainerId:number, isApproved:null,batchId:number ){
    try{
        const response =  await axiosClient.post('/consent', {trainerId:trainerId, isApproved:isApproved, batchId:batchId});
        return response;
    } catch (e){
        console.log(e)
    }
}

export async function approveConsentRequest(consent:Consent ){
    try{
        const response =  await axiosClient.patch('/consent', {consent:consent});
        //return response;
    } catch (e){
        console.log(e)
    }
}

export async function denyConsentRequest(consent:Consent ) {
    try{
        const response =  await axiosClient.patch('/consent', {consent:consent});
        //return response;
    } catch (e){
        console.log(e)
    }
}

export async function getConsentByTrainerId(id: number) : Promise<any[]> {
    try {
        const response = await axiosClient.get(`/consent/${id}`);
        return response.data.map((itemObj: any) => {
           const {consentId, trainerId, isApproved, batchId  } = itemObj;
           return new Consent(consentId, trainerId, isApproved, batchId);
        })
    } catch(e) {
        // Add more error functionality later
        console.log(e.message);
        throw e;
    }
}


export async function getBatchName(batchId:number ){
    try{
        const response =  await axiosClient.get(`/batches/${batchId}`);
        return response;
    } catch (e){
        console.log(e)
    }
}

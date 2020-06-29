import axios, { AxiosResponse } from 'axios';
import {Consent} from '../models/Consent'
import { Trainer } from '../models/Trainer';


export const storeClient = axios.create({
    baseURL : 'http://localhost:1235', // Use this to test on your local machine, leave commented out.
    // baseURL : ' http://3.21.185.168:8585', // The server was using this port instead for some reason
    //baseURL : 'http://18.216.197.108:8080',
    //if you don't have the following line, your login won't work
    withCredentials: false, // we should probably change this later
});


export async function getEligibility(trainer:Trainer, batchId:number): Promise<boolean>{

    const response : boolean = await storeClient.get(`/trainer/eligible/${batchId}`,{
        params: {
          trainer: trainer,
        }
      })
      return response;
}

export async function assignTrainer(trainerId : number, batchId : number){
    const repsone = await storeClient.post('/trainerbatch', {trainerId:trainerId, batchId:batchId});
}


export async function getAllTrainers() : Promise<Trainer[]>{
    try{
        const response =  await storeClient.get('/trainer');
        return response.data.map((trainerObj: any) => {
            const {trainerId, firstName, lastName, email,  trainerSkills, consent, batch  } = trainerObj;
            
            return new Trainer(trainerId,firstName, lastName, email,  trainerSkills, consent, batch, false);
         })
    } catch (e){
        console.log(e)
        throw e;
    }
}
export async function createConsentRequest(trainerId:number, isApproved:null,batchId:number ){
    try{
        const response =  await storeClient.post('/consent', {trainerId:trainerId,batchId:batchId,isApproved:isApproved});
        return response;
    } catch (e){
        console.log(e)
    }
}

export async function approveConsentRequest(consent:Consent ){
    try{
        const response =  await storeClient.patch('/consent', {consent:consent});
        //return response;
    } catch (e){
        console.log(e)
    }
}

export async function denyConsentRequest(consent:Consent ) {
    try{
        const response =  await storeClient.patch('/consent', {consent:consent});
        //return response;
    } catch (e){
        console.log(e)
    }
}

export async function getConsentByTrainerId(id: number) : Promise<any[]> {
    try {
        const response = await storeClient.get(`/consent/${id}`);
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
        const response =  await storeClient.get(`/batches/${batchId}`);
        return response;
    } catch (e){
        console.log(e)
    }
}

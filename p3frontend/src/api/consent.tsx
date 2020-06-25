import axios, { AxiosResponse } from 'axios';
import {Consent} from '../models/Consent'
import { Batch } from '../models/Batch';


export const storeClient = axios.create({
    //baseURL : 'http://localhost:8080', // Use this to test on your local machine, leave commented out.
    baseURL : ' http://3.21.185.168:8585', // The server was using this port instead for some reason
    //baseURL : 'http://18.216.197.108:8080',
    //if you don't have the following line, your login won't work
    withCredentials: false, // we should probably change this later
})


export async function createConsentRequest(consent:Consent ){
    try{
        const response =  await storeClient.post('/consent', {consent:consent});
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

// Confirm/Unconfirm a batch
export async function batchConfirm(bId : number, isConf : boolean) : Promise<Batch> {
    try {
        const dataTransfer =  {isConfirmed : isConf};
        const response = await storeClient.patch(`/batches/${bId}`, dataTransfer);
        const {
            batchId, 
            curriculum, 
            startDate, 
            endDate, 
            isConfirmed, 
            interviewScoreLower
        } = response.data;
        return new Batch(
            batchId,
            curriculum,
            startDate,
            endDate,
            isConfirmed,
            interviewScoreLower
        );
    } catch (e) {
        console.log("Failed to update batch confirmation", e.message);
        throw e;
    }
}
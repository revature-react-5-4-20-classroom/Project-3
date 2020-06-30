import {Consent} from '../models/Consent'
import { Trainer } from '../models/Trainer';
import { axiosClient } from './axios';

export async function getEligibility(trainerId:number, batchId:number): Promise<boolean>{

<<<<<<< HEAD
    const response : boolean = await storeClient.get(`/trainer/eligible/${batchId}/trainerid/${trainerId}`)
=======
    const response : boolean = await axiosClient.get(`/trainer/eligible/${batchId}`,{
        params: {
          trainer: trainer,
        }
      })
>>>>>>> 2045e8691e7168fa0d0f1a9b1cf33261cbfe18ec
      return response;
}




export async function getAllTrainers() : Promise<Trainer[]>{
    try{
        const response =  await axiosClient.get('/trainer');
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
        const response =  await axiosClient.post('/consent', {trainerId:trainerId,batchId:batchId,isApproved:isApproved});
        return response;
    } catch (e){
        console.log(e)
    }
}

export async function approveConsentRequest(consent:Consent ){
    try{
<<<<<<< HEAD
        await storeClient.patch('/consent', {
            consentId: consent.consentId,
            batchId: consent.batchId,
            trainerId: consent.trainerId,
            isApprovedColumn:consent.isApproved
        });
        
=======
        const response =  await axiosClient.patch('/consent', {consent:consent});
        //return response;
>>>>>>> 2045e8691e7168fa0d0f1a9b1cf33261cbfe18ec
    } catch (e){
        console.log(e)
    }
}

export async function denyConsentRequest(consent:Consent ) {
    try{
<<<<<<< HEAD
        await storeClient.patch('/consent', {
            consentId: consent.consentId,
            batchId: consent.batchId,
            trainerId: consent.trainerId,
            isApprovedColumn:consent.isApproved
        });
        
=======
        const response =  await axiosClient.patch('/consent', {consent:consent});
        //return response;
>>>>>>> 2045e8691e7168fa0d0f1a9b1cf33261cbfe18ec
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

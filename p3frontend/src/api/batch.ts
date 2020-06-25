import { storeClient } from './consent';
import { Batch } from '../models/Batch';

export async function getBatchById(batchId:number ){
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
            startDate, 
            endDate, 
            isConfirmed, 
            interviewScoreLower,
            trainer,
            location,
            curriculum,
            associates
        } = response.data;
        return new Batch(
            batchId,
            startDate,
            endDate,
            isConfirmed,
            interviewScoreLower,
            trainer,
            location,
            curriculum,
            associates
        );
    } catch (e) {
        console.log("Failed to update batch confirmation", e.message);
        throw e;
    }
}
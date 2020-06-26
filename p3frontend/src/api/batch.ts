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
export async function updateBatch(bId : number, isConf : boolean) : Promise<Batch> {
    try {
        const dataTransfer =  {batchId: bId, isConfirmed: isConf};
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
        console.log("Failed to update batch", e.message);
        throw e;
    }
}

// Assign trainer to a batch (currently returns void)
export async function assignTrainer(bId : number, trainId : number) : Promise<void> {
    try {
        const dataTransfer = { batchId: bId, trainerId: trainId };
        const response = await storeClient.post('/trainerbatch', dataTransfer);
        console.log(`Trainer ${trainId} assigned to batch ${bId}`);
    } catch (e) {
        console.log('failed to assign trainer to batch', e.message);
        throw e;
    }
}


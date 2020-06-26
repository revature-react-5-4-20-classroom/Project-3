import { storeClient } from './consent';
import { Batch } from '../models/Batch';

// Helper function to construct batch from response
const buildABatch = (respData : any) : Batch => {
    const {
        batchId, 
        startDate, 
        endDate, 
        isConfirmed, 
        interviewScoreLower,
        trainers,
        location,
        curriculum,
        associates,
        consent
    } = respData;
    return new Batch(
        batchId,
        startDate,
        endDate,
        isConfirmed,
        interviewScoreLower,
        trainers,
        location,
        curriculum,
        associates,
        consent
    );
}

export async function getAllBatches() : Promise<Batch[]>{
    try {
        const response = await storeClient.get('/batches');
        const respData = response.data
        const allBatches = respData.map((b : any) => {
            return buildABatch(b);
        });
        return allBatches;
    } catch (e) {
        console.log(`Failed to retrieve batches: ${e.message}`);
        throw e;
    }
}

export async function getBatchById(bId : number) : Promise<Batch> {
    try{
        const response = await storeClient.get(`/batches/${bId}`);
        const respData = response.data;
        const theBatch = buildABatch(respData);
        return theBatch;
    } catch (e){
        console.log(`Failed to retrieve batch #${bId} : ${e.message}`);
        throw e;
    }
}

// Confirm/Unconfirm a batch 
export async function updateBatch(bId : number, isConf : boolean) : Promise<Batch> {
    try {
        const dataTransfer =  {batchId: bId, isConfirmed: isConf};
        const response = await storeClient.patch(`/batches/${bId}`, dataTransfer);
        const respData = response.data;
        const theBatch = buildABatch(respData);
        return theBatch;
    } catch (e) {
        console.log("Failed to update batch", e.message);
        throw e;
    }
}

// Assign trainer to a batch (currently returns void)
export async function assignTrainer(bId : number, trainId : number) : Promise<void> {
    try {
        const dataTransfer = {batchId: bId, trainerId: trainId};
        const response = await storeClient.post('/trainerbatch', dataTransfer);
        console.log(`Trainer ${trainId} assigned to batch ${bId}`);
    } catch (e) {
        console.log('failed to assign trainer to batch', e.message);
        throw e;
    }
}


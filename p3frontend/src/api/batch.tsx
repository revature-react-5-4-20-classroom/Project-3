
import { Batch } from '../models/Batch';
import { axiosClient } from './axios';


export async function getBatchById(batchId:number ){
    try{
        const response =  await axiosClient.get(`/batches/${batchId}`);
        return response;
    } catch (e){
        console.log(e)
    }
}

// Confirm/Unconfirm a batch // Assigm, unassign, or switch batch trainers
// NEEDS TO BE UPDATED
export async function updateBatch(bId : number, isConf : boolean, trainId? : number) : Promise<Batch> {
    try {
        const dataTransfer =  {batchId: bId, isConfirmed: isConf, trainerId: trainId ? trainId : null};
        const response = await axiosClient.patch(`/batches/${bId}`, dataTransfer);
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

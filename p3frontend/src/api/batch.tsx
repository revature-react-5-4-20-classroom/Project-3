
import { Batch } from '../models/Batch';
import { axiosClient } from './axios';
import { useCallback } from 'react';


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
//does not want to co-operate with me. complains about number of arguments to new Batch, but they are the same
// export async function updateBatch(bId : number, isConf : boolean, trainId? : number){
//     try {
//         const dataTransfer =  {batchId: bId, isConfirmed: isConf, trainerId: trainId ? trainId : null};
//         const response = await axiosClient.patch(`/batches/${bId}`, dataTransfer);

//         // const {
//         //     batchId, 
//         //     startDate, 
//         //     endDate, 
//         //     isConfirmed, 
//         //     interviewScoreLower,
//         //     trainer,
//         //     trainers,
//         //     location,
//         //     curriculum,
//         //     associates
//         // } = response.data;


//         return new Batch(
//             response.data.batchId,
//             response.data.startDate,
//             response.data.endDate,

//             response.data.isConfirmed,
//             response.data.interviewScoreLower,

//             response.data.trainers,
//             response.data.location,
//             response.data.curriculum,
//             response.data.associates
//         )

//     } catch (e) {
//         console.log("Failed to update batch", e.message);
//         throw e;

//     }
// }

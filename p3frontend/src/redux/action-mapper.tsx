import { Batch } from "../models/Batch";

export const clickTypes = {
  BATCH_CLICK: "BATCH_CLICK",
  CURRENT_BATCH_CLICK: "CURRENT_BACTCH_CLICK",
  BATCH_UPDATE: 'BATCH_UPDATE'
};

export const batchClickActionMapper = (batchClicked: Batch) => {
  return {
    type: clickTypes.BATCH_CLICK,
    payload: {
      batchClicked,
    },
  };
};
export const currentBatchClickActionMapper = (currentBatchClicked: Batch) => {
  return {
    type: clickTypes.CURRENT_BATCH_CLICK,
    payload: {
      currentBatchClicked,
    },
  };
};

export const batchUpdateActionMapper = (updatedBatch : Batch) => {
    return {
        type: clickTypes.BATCH_UPDATE,
        payload: updatedBatch
    }
}

/*
    All the action mappers can go here and be 
    used when needed anywhere in the project
*/
export const allTheActionMappers = {
  batchClickActionMapper,
  currentBatchClickActionMapper,
  batchUpdateActionMapper
};

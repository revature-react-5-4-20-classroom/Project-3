import { Batch } from "../models/Batch";
import { Trainer } from "../models/Trainer";
import { Associate } from "../models/Associate";

export const clickTypes = {
  BATCH_CLICK: "BATCH_CLICK",
  CURRENT_BATCH_CLICK: "CURRENT_BACTCH_CLICK",
  BATCH_UPDATE: "BATCH_UPDATE",
  ADD_TRAINER_BATCH: "ADD_TRAINER_BATCH",
  REMOVE_TRAINER_BATCH: "REMOVE_TRAINER_BATCH",
  ADD_ASSOCIATE_BATCH: "ADD_ASSOCIATE_BATCH",
  REMOVE_ASSOCIATE_BATCH: "REMOVE_ASSOCIATE_BATCH",
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

export const batchUpdateActionMapper = (updatedBatch: Batch) => {
  return {
    type: clickTypes.BATCH_UPDATE,
    payload: {
      updatedBatch,
    },
  };
};

export const addTrainerToBatchActionMapper = (
  batch: Batch,
  trainer: Trainer
) => {
  return {
    type: clickTypes.ADD_TRAINER_BATCH,
    payload: {
      batch,
      trainer,
    },
  };
};

export const removeTrainerFromBatchActionMapper = (
  batch: Batch,
  trainer: Trainer
) => {
  return {
    type: clickTypes.REMOVE_TRAINER_BATCH,
    payload: {
      batch,
      trainer,
    },
  };
};

export const addAssociateToBatchActionMapper = (
  batch: Batch,
  associate: Associate
) => {
  return {
    type: clickTypes.ADD_ASSOCIATE_BATCH,
    payload: {
      batch,
      associate,
    },
  };
};

export const removeAssociateFromBatchActionMapper = (
  batch: Batch,
  associate: Associate
) => {
  return {
    type: clickTypes.REMOVE_ASSOCIATE_BATCH,
    payload: {
      batch,
      associate,
    },
  };
};
/*
    All the action mappers can go here and be 
    used when needed anywhere in the project
*/
export const allTheActionMappers = {
  batchClickActionMapper,
  currentBatchClickActionMapper,
  batchUpdateActionMapper,
  addTrainerToBatchActionMapper,
  removeTrainerFromBatchActionMapper,
  addAssociateToBatchActionMapper,
  removeAssociateFromBatchActionMapper,
};

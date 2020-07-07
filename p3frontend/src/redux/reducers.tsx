import { AnyAction, combineReducers } from "redux";
import { clickTypes } from "./action-mapper";
import { Batch } from "../models/Batch";
import { Trainer } from "../models/Trainer";
import { Associate } from "../models/Associate";

interface IBatchState {
  batch: Batch | null;
}

const initialBatchState: IBatchState = {
  batch: null,
};

export const batchReducer = (
  state: IBatchState = initialBatchState,
  action: AnyAction
): IBatchState => {
  switch (action.type) {
    case clickTypes.BATCH_CLICK: {
      let newBatch: Batch = action.payload.batchClicked;

      return {
        batch: newBatch,
      };
    }

    case clickTypes.CURRENT_BATCH_CLICK: {
      let currentClickedBatch: Batch = action.payload.batchClicked;

      return {
        batch: currentClickedBatch,
      };
    }

    case clickTypes.BATCH_UPDATE: {
      let updatedBatch: Batch = action.payload.updatedBatch;
      return {
        batch: updatedBatch,
      };
    }

    case clickTypes.ADD_TRAINER_BATCH: {
      let batch: Batch = action.payload.batch;
      let trainer: Trainer = action.payload.trainer;
      let trainers: Trainer[] = batch.trainers;
      let exists: boolean = false;
      console.log(batch);
      for (let t of trainers) {
        if (t.trainerId === trainer.trainerId) {
          exists = true;
        }
      }
      if (!exists) {
        trainers.push(trainer);
        batch.trainers = trainers;
      }
      return {
        batch: batch,
      };
    }

    case clickTypes.REMOVE_TRAINER_BATCH: {
      let batch: Batch = action.payload.batch;
      let trainer: Trainer = action.payload.trainer;
      let trainers: Trainer[] = batch.trainers;
      let updatedTrainers: Trainer[] = trainers.filter((t) => {
        return t.trainerId !== trainer.trainerId;
      });
      batch.trainers = updatedTrainers;
      return {
        batch: batch,
      };
    }

    case clickTypes.ADD_ASSOCIATE_BATCH: {
      let batch: Batch = action.payload.batch;
      let associate: any = action.payload.associate;
      let associates: Associate[] = batch.associates;
      let exists: boolean = false;
      for (let a of associates) {
        if (a.associateId === associate.associateId) {
          exists = true;
        }
      }
      if (!exists) {
        associates.push(associate);
        batch.associates = associates;
      }
      return {
        batch: batch,
      };
    }

    case clickTypes.REMOVE_ASSOCIATE_BATCH: {
      let batch: Batch = action.payload.batch;
      let associate: any = action.payload.associate;
      let associates: Associate[] = batch.associates;
      let updatedAssociates: Associate[] = associates.filter((a) => {
        return a.associateId !== associate.associateId;
      });
      batch.associates = updatedAssociates;
      return {
        batch: batch,
      };
    }
    default: {
      return state;
    }
  }
};

export interface IState {
  batch: IBatchState;
}
// Now all of our reducers are in state, exported here
//all actions can take place on state and they go to the appropriate
// reducer
export const state = combineReducers<IState>({
  batch: batchReducer,
});

/*
    anytime mapStateToProps needs to be done
    we can put that here and use it everywhere in the project
*/
export const allTheMapStateToProps = (state: IState) => {
  return { ...state.batch };
};

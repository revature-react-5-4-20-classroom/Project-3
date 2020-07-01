import { AnyAction, combineReducers, bindActionCreators } from "redux";
import { clickTypes } from "./action-mapper";
import { Batch } from "../models/Batch";

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

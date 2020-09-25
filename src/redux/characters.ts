import { IAction, IStateSlice } from './actions';
import  { ActionTypes } from './actionTypes';

export const Characters = (
    state: IStateSlice = { isLoading: true, errMess: null, characters: [] }, action: IAction) => {

  switch (action.type) {
    case ActionTypes.ADD_CHARACTERS:
      return { ...state, isLoading: false, errMess: null, characters: action.payload };

    case ActionTypes.CHARACTERS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, characters: [] };

    case ActionTypes.CHARACTERS_LOADING:
      return { ...state, isLoading: true, errMess: null, characters: [] };

    default:
      return state;
  }
};

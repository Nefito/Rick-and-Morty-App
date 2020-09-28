import {  IAction, IStateSlice } from '..';
import { ActionTypes } from './actionTypes';

const Episodes = (
    state: IStateSlice = { isLoading: true, errMess: null, episodes: [] }, action: IAction) => {
  switch (action.type) {
    case ActionTypes.ADD_EPISODES:
      return { ...state, isLoading: false, errMess: null, episodes: action.payload };

    case ActionTypes.EPISODES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, episodes: [] };

    case ActionTypes.EPISODES_LOADING:
      return { ...state, isLoading: true, errMess: null, episodes: [] };

    default:
      return state;
  }
};

export default Episodes;

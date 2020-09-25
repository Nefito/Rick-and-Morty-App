import {  IAction, IStateSlice } from './actions';
import { ActionTypes } from './actionTypes';

export const Locations = (
    state: IStateSlice = { isLoading: true, errMess: null, locations: [] }, action: IAction) => {
  switch (action.type) {
    case ActionTypes.ADD_LOCATIONS:
      return { ...state, isLoading: false, errMess: null, locations: action.payload };

    case ActionTypes.LOCATIONS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, locations: [] };

    case ActionTypes.LOCATIONS_LOADING:
      return { ...state, isLoading: true, errMess: null, locations: [] };

    default:
      return state;
  }
};

import {  IAction, IStateSlice } from '../../types';
import LocationsActionTypeKeys from './actionTypes';

const locationsReducer = (
    state: IStateSlice = { isLoading: true, errMess: null, locations: [] }, action: IAction) => {
  switch (action.type) {
    case LocationsActionTypeKeys.GET_LOCATIONS:
      return { ...state, isLoading: false, errMess: null, locations: action.payload };

    case LocationsActionTypeKeys.LOCATIONS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, locations: [] };

    case LocationsActionTypeKeys.LOCATIONS_LOADING:
      return { ...state, isLoading: true, errMess: null, locations: [] };

    default:
      return state;
  }
};

export default locationsReducer;

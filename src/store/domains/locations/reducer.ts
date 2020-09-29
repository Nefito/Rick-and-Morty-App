import { IStateSlice } from '../../types';
import { LocationsActionTypeKeys, LocationsActionTypes } from './actionTypes';

const episodesInitialState: IStateSlice = {
  isLoading: true, 
  errMess: null, 
  locations: []
};

const locationsReducer = (state = episodesInitialState, action: LocationsActionTypes) => {

  switch (action.type) {
    case LocationsActionTypeKeys.GET_LOCATIONS_FULFILLED:
      return { ...state, isLoading: false, errMess: null, locations: action.payload };
    
    case LocationsActionTypeKeys.GET_LOCATIONS_REJECTED:
      // tslint:disable-next-line: max-line-length
      return { ...state, isLoading: false, errMess: `Error:${action.payload.statusCode} ${action.payload.text}`, locations: [] };

    // case LocationsActionTypeKeys.LOCATIONS_LOADING:
    //   return { ...state, isLoading: true, errMess: null, locations: [] };

    default:
      return state;
  }
};

export default locationsReducer;

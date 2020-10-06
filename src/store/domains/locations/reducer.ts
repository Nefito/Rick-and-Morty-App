import { LocationsActionTypeKeys, LocationsActionTypes } from './actionTypes';
import { ILocationsInitialState } from './types';

const locationsInitialState: ILocationsInitialState = {
  isLoading: true, 
  errMess: null, 
  locations: {
    info: null,
    results: []
  }
};

const locationsReducer = (state = locationsInitialState, action: LocationsActionTypes): ILocationsInitialState => {

  switch (action.type) {
    case LocationsActionTypeKeys.GET_LOCATIONS_FULFILLED:
      return { ...state, isLoading: false, errMess: null, locations: action.payload };
    
    case LocationsActionTypeKeys.GET_LOCATIONS_REJECTED:
      return { 
        ...state, 
        isLoading: false, 
        errMess: `Error:${action.payload.statusCode} ${action.payload.text}`, 
        locations: { info: null, results: [] } 
      };
      
    default:
      return state;
  }
};

export default locationsReducer;

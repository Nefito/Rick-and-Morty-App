import { apiClientService } from 'services'; 

import { DispatchAction, IAction } from '../index';
import { ActionTypes } from './actionTypes';

export const locationsLoading = (): IAction => ({
  type: ActionTypes.LOCATIONS_LOADING
});

export const locationsFailed = (errMess: string): IAction => ({
  type: ActionTypes.LOCATIONS_FAILED,
  payload: errMess
});

export const addLocations = (locations: object): IAction => ({
  type: ActionTypes.ADD_LOCATIONS,
  payload: locations
});

export const fetchLocations = () => (dispatch: DispatchAction) => {
  dispatch(locationsLoading());

  return apiClientService.get('location')
    .then(response => response,
    error => {
      const errMess = new Error(error.message);
      throw errMess;
    })
    .then(locations => dispatch(addLocations(locations)))
    .catch(error => dispatch(locationsFailed(error.message)));
};
import { IGetLocationsActionType, LocationsActionTypeKeys } from './actionTypes';
import * as api from './api';

type GetLocationsAction = (page?: number) =>  IGetLocationsActionType;

export const getLocationsAction: GetLocationsAction = (page?: number) => ({
  type: LocationsActionTypeKeys.GET_LOCATIONS,
  payload: api.getLocations(page)
});

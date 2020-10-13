import { IGetLocationsActionType, LocationsActionTypeKeys } from './actionTypes';
import * as api from './api';

type GetLocationsAction = (page?: number, name?: string, type?: string) =>  IGetLocationsActionType;

export const getLocationsAction: GetLocationsAction = (page?: number, name?: string, type?: string) => ({
  type: LocationsActionTypeKeys.GET_LOCATIONS,
  payload: api.getLocations(page, name, type)
});

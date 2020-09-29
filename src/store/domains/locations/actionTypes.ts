import { IPromiseAction } from 'types';

import { ILocationsFulfilled, ILocationsRejected, LocationsPromiseType } from './types';

export enum LocationsActionTypeKeys {
  GET_LOCATIONS = 'locations/ADD_LOCATIONS',
  GET_LOCATIONS_FULFILLED = 'locations/GET_LOCATIONS_FULFILLED',
  GET_LOCATIONS_REJECTED = 'locations/GET_LOCATIONS_REJECTED'
}

export interface IGetLocationsActionType extends 
  IPromiseAction<LocationsActionTypeKeys.GET_LOCATIONS, Promise<LocationsPromiseType>> {}

export interface IGetLocationsFulfilledActionType extends 
  IPromiseAction<LocationsActionTypeKeys.GET_LOCATIONS_FULFILLED, ILocationsFulfilled> {}

export interface IGetLocationsRejectedActionType extends 
  IPromiseAction<LocationsActionTypeKeys.GET_LOCATIONS_REJECTED, ILocationsRejected> {} 

export type LocationsActionTypes = IGetLocationsFulfilledActionType | IGetLocationsRejectedActionType;

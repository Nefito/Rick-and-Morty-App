import { IPromiseAction } from 'types';

export enum LocationsActionTypeKeys {
  GET_LOCATIONS = 'locations/ADD_LOCATIONS',
  GET_LOCATIONS_FULFILLED = 'locations/GET_LOCATIONS_FULFILLED',
  GET_LOCATIONS_REJECTED = 'locations/GET_LOCATIONS_REJECTED'
}

export interface IGetLocationsActionType extends 
  IPromiseAction<LocationsActionTypeKeys.GET_LOCATIONS, Promise<any>> {}

export interface IGetLocationsFulfilledActionType extends 
  IPromiseAction<LocationsActionTypeKeys.GET_LOCATIONS_FULFILLED, any> {}

export interface IGetLocationsRejectedActionType extends 
  IPromiseAction<LocationsActionTypeKeys.GET_LOCATIONS_REJECTED, any> {} 

export type LocationsActionTypes = IGetLocationsFulfilledActionType | IGetLocationsRejectedActionType;

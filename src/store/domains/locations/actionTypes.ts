import { IPromiseAction } from 'types';

import { IErrorResponse } from '../types';
import { IGetLocationsResponse } from './types';

export enum LocationsActionTypeKeys {
  GET_LOCATIONS = 'locations/ADD_LOCATIONS',
  GET_LOCATIONS_FULFILLED = 'locations/GET_LOCATIONS_FULFILLED',
  GET_LOCATIONS_REJECTED = 'locations/GET_LOCATIONS_REJECTED'
}

export interface IGetLocationsActionType extends 
  IPromiseAction<LocationsActionTypeKeys.GET_LOCATIONS, Promise<IGetLocationsResponse>> {}

export interface IGetLocationsFulfilledActionType extends 
  IPromiseAction<LocationsActionTypeKeys.GET_LOCATIONS_FULFILLED, IGetLocationsResponse> {}

export interface IGetLocationsRejectedActionType extends 
  IPromiseAction<LocationsActionTypeKeys.GET_LOCATIONS_REJECTED, IErrorResponse> {} 

export type LocationsActionTypes = IGetLocationsFulfilledActionType | IGetLocationsRejectedActionType;

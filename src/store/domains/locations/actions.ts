import { IThunk } from 'types';

import { IGetLocationsActionType, LocationsActionTypeKeys } from './actionTypes';
import * as api from './api';

type GetLocationsAction = () =>  IGetLocationsActionType;

export const getLocationsAction: GetLocationsAction = () => ({
  type: LocationsActionTypeKeys.GET_LOCATIONS,
  payload: api.getLocations()
});

export type HandleGetLocationsAction = () => IThunk<void>;

export const handleGetLocationsAction: HandleGetLocationsAction = () => (dispatch, getState) => {
  dispatch(getLocationsAction());
};

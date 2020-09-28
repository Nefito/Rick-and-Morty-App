import { IGetLocationsActionType, LocationsActionTypeKeys } from './actionTypes';
import * as api from './api';

// export const locationsFailed = (errMess: string): IAction => ({
//   type: LocationsActionTypeKeys.LOCATIONS_FAILED,
//   payload: errMess
// });

type GetLocationsAction = () =>  IGetLocationsActionType;

export const getLocationsAction: GetLocationsAction = () => ({
  type: LocationsActionTypeKeys.GET_LOCATIONS,
  payload: api.getLocations()
});

// export const fetchLocations = () => (dispatch: DispatchAction) => {
//   dispatch(locationsLoading());

//   return apiClientService.get('location')
//     .then(response => response,
//     error => {
//       const errMess = new Error(error.message);
//       throw errMess;
//     })
//     .then(locations => dispatch(addLocations(locations)))
//     .catch(error => dispatch(locationsFailed(error.message)));
// };

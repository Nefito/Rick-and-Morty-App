import * as ActionTypes from './ActionTypes';
import {  Action, stateSlice } from './ActionCreators';

export const Locations = (state: stateSlice = {
    isLoading: true,
    errMess: null,
    locations: []
}, action: Action) => {
    switch (action.type) {
        case ActionTypes.ADD_LOCATIONS:
            return { ...state, isLoading: false, errMess: null, locations: action.payload };

        case ActionTypes.LOCATIONS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, locations: [] };

        case ActionTypes.LOCATIONS_LOADING:
            return { ...state, isLoading: true, errMess: null, locations: [] };

        default:
            return state;
    }
}

import * as ActionTypes from './ActionTypes';
import {  Action, stateSlice } from './ActionCreators';

export const Episodes = (state: stateSlice = {
    isLoading: true,
    errMess: null,
    episodes: []
}, action: Action) => {
    switch (action.type) {
        case ActionTypes.ADD_EPISODES:
            return { ...state, isLoading: false, errMess: null, episodes: action.payload };

        case ActionTypes.EPISODES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, episodes: [] };

        case ActionTypes.EPISODES_LOADING:
            return { ...state, isLoading: true, errMess: null, episodes: [] };

        default:
            return state;
    }
}

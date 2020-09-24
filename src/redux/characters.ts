import * as ActionTypes from './ActionTypes';
import {  Action, stateSlice } from './ActionCreators';

export const Characters = (state: stateSlice = {
    isLoading: true,
    errMess: null,
    characters: []
}, action: Action) => {
    switch (action.type) {
        case ActionTypes.ADD_CHARACTERS:
            return { ...state, isLoading: false, errMess: null, characters: action.payload };

        case ActionTypes.CHARACTERS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, characters: [] };

        case ActionTypes.CHARACTERS_LOADING:
            return { ...state, isLoading: true, errMess: null, characters: [] };

        default:
            return state;
    }
}

import  baseUrl  from '../shared/baseUrl';
import * as ActionTypes from './ActionTypes';

interface MyError extends Error {
    response?: Response;
}

export interface Action {
    type: string;
    payload?: any;
}

export interface stateSlice {
    isLoading: boolean;
    errMess: string | null;
    [propName: string]: any;
}

//character action creators
export const charactersLoading = (): Action => ({
    type: ActionTypes.CHARACTERS_LOADING
});

export const charactersFailed = (errMess: string): Action => ({
    type: ActionTypes.CHARACTERS_FAILED,
    payload: errMess
});

export const addCharacters = (characters: object): Action => ({
    type: ActionTypes.ADD_CHARACTERS,
    payload: characters
});

export const fetchCharacters = (dispatch: Function) => {
    dispatch(charactersLoading());

    return fetch(baseUrl + 'character/')
           .then(response => {
               if (response.ok) {
                   return response;
               }
               let error: MyError = new Error('Error ' + response.status + ': ' + response.statusText);
               error.response = response;
               throw error;
           },
           error => {
               let errMess = new Error(error.message)
               throw errMess;
           })
           .then(response => response.json())
           .then(characters => dispatch(addCharacters(characters)))
           .catch(error => dispatch(charactersFailed(error.message)));
}

//location action creators
export const locationsLoading = (): Action => ({
    type: ActionTypes.LOCATIONS_LOADING
});

export const locationsFailed = (errMess: string): Action => ({
    type: ActionTypes.LOCATIONS_FAILED,
    payload: errMess
});

export const addLocations = (locations: object): Action => ({
    type: ActionTypes.ADD_LOCATIONS,
    payload: locations
});

export const fetchLocations = (dispatch: Function) => {
    dispatch(locationsLoading());

    return fetch(baseUrl + 'location/')
           .then(response => {
               if (response.ok) {
                   return response;
               }
               let error: MyError = new Error('Error ' + response.status + ': ' + response.statusText);
               error.response = response;
               throw error;
           },
           error => {
               let errMess = new Error(error.message)
               throw errMess;
           })
           .then(response => response.json())
           .then(locations => dispatch(addCharacters(locations)))
           .catch(error => dispatch(charactersFailed(error.message)));
}

//episode action creators
export const episodesLoading = (): Action => ({
    type: ActionTypes.LOCATIONS_LOADING
});

export const episodesFailed = (errMess: string): Action => ({
    type: ActionTypes.LOCATIONS_FAILED,
    payload: errMess
});

export const addEpisodes = (episodes: object): Action => ({
    type: ActionTypes.ADD_LOCATIONS,
    payload: episodes
});

export const fetchEpisodes = (dispatch: Function) => {
    dispatch(episodesLoading());

    return fetch(baseUrl + 'episode/')
           .then(response => {
               if (response.ok) {
                   return response;
               }
               let error: MyError = new Error('Error ' + response.status + ': ' + response.statusText);
               error.response = response;
               throw error;
           },
           error => {
               let errMess = new Error(error.message)
               throw errMess;
           })
           .then(response => response.json())
           .then(episodes => dispatch(addCharacters(episodes)))
           .catch(error => dispatch(charactersFailed(error.message)));
}

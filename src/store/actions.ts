import  baseUrl  from 'shared/baseUrl';
import { ActionTypes } from './actionTypes';

interface IMyError extends Error {
  response?: Response;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IStateSlice {
  isLoading: boolean;
  errMess: string | null;
  [propName: string]: any;
}

type DispatchAction = (arg: IAction) => (IAction);

// character action creators
export const charactersLoading = (): IAction => ({
  type: ActionTypes.CHARACTERS_LOADING
});

export const charactersFailed = (errMess: string): IAction => ({
  type: ActionTypes.CHARACTERS_FAILED,
  payload: errMess
});

export const addCharacters = (characters: object): IAction => ({
  type: ActionTypes.ADD_CHARACTERS,
  payload: characters
});

export const fetchCharacters = (dispatch: DispatchAction) => {
  dispatch(charactersLoading());

  return fetch(`${baseUrl}character/`)
    .then(response => {
      if (response.ok) {
        return response;
      }
      const error: IMyError = new Error(`Error ${response.status}: ${response.statusText}`);
      error.response = response;
      throw error;
    },
    error => {
      const errMess = new Error(error.message);
      throw errMess;
    })
    .then(response => response.json())
    .then(characters => dispatch(addCharacters(characters)))
    .catch(error => dispatch(charactersFailed(error.message)));
};

// location action creators
export const locationsLoading = (): IAction => ({
  type: ActionTypes.LOCATIONS_LOADING
});

export const locationsFailed = (errMess: string): IAction => ({
  type: ActionTypes.LOCATIONS_FAILED,
  payload: errMess
});

export const addLocations = (locations: object): IAction => ({
  type: ActionTypes.ADD_LOCATIONS,
  payload: locations
});

export const fetchLocations = (dispatch: DispatchAction) => {
  dispatch(locationsLoading());

  return fetch(`${baseUrl}location/`)
    .then(response => {
      if (response.ok) {
        return response;
      }
      const error: IMyError = new Error(`Error ${response.status}: ${response.statusText}`);
      error.response = response;
      throw error;
    },
    error => {
      const errMess = new Error(error.message);
      throw errMess;
    })
    .then(response => response.json())
    .then(locations => dispatch(addCharacters(locations)))
    .catch(error => dispatch(charactersFailed(error.message)));
};

// episode action creators
export const episodesLoading = (): IAction => ({
  type: ActionTypes.LOCATIONS_LOADING
});

export const episodesFailed = (errMess: string): IAction => ({
  type: ActionTypes.LOCATIONS_FAILED,
  payload: errMess
});

export const addEpisodes = (episodes: object): IAction => ({
  type: ActionTypes.ADD_LOCATIONS,
  payload: episodes
});

export const fetchEpisodes = (dispatch: DispatchAction) => {
  dispatch(episodesLoading());

  return fetch(`${baseUrl}episode/`)
    .then(response => {
      if (response.ok) {
        return response;
      }
      const error: IMyError = new Error(`Error ${response.status}: ${response.statusText}`);
      error.response = response;
      throw error;
    },
    error => {
      const errMess = new Error(error.message);
      throw errMess;
    })
    .then(response => response.json())
    .then(episodes => dispatch(addCharacters(episodes)))
    .catch(error => dispatch(charactersFailed(error.message)));
};

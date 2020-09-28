import { apiClientService } from 'services'; 

import { DispatchAction, IAction } from '../index';
import { ActionTypes } from './actionTypes';

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

export const fetchCharacters = () => (dispatch: DispatchAction) => {
  dispatch(charactersLoading());

  return apiClientService.get('character/')
    .then(response => response,
    error => {
      const errMess = new Error(error.message);
      throw errMess;
    })
    .then(characters => dispatch(addCharacters(characters)))
    .catch(error => dispatch(charactersFailed(error.message)));
};

import { IThunk } from 'types';

import { IAction } from '../../types';
import  { CharacterActionTypeKeys, IGetCharactersActionType } from './actionTypes';
import * as api from './api';

export const charactersFailed = (errMess: string): IAction => ({
  type: CharacterActionTypeKeys.GET_CHARACTERS_REJECTED,
  payload: errMess
});

type GetCharactersAction = () => IGetCharactersActionType;

export const getCharactersAction: GetCharactersAction = () => ({ // example
  type: CharacterActionTypeKeys.GET_CHARACTERS,
  payload: api.getCharacter()
});

// export const fetchCharacters = () => (dispatch: DispatchAction) => {
//   dispatch(charactersLoading());

//   return apiClientService.get('character/')
//     .then(response => response,
//     error => {
//       const errMess = new Error(error.message);
//       throw errMess;
//     })
//     .then(characters => dispatch(addCharacters(characters)))
//     .catch(error => dispatch(charactersFailed(error.message)));
// };

type HandleGetCharactersAction = () => IThunk<void>;

export const handleGetCharactersAction: HandleGetCharactersAction = () => (dispatch, getState) => {
  dispatch(getCharactersAction());
};

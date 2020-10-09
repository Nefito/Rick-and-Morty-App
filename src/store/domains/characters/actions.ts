import  { CharactersActionTypeKeys, IGetCharactersActionType } from './actionTypes';
import * as api from './api';

export type GetCharactersAction = (page?: number) => IGetCharactersActionType;

export const getCharactersAction: GetCharactersAction = (page?: number) => ({
  type: CharactersActionTypeKeys.GET_CHARACTERS,
  payload: api.getCharacters(page)
});

import { isNamedExports } from 'typescript';
import  { CharactersActionTypeKeys, IGetCharactersActionType } from './actionTypes';
import * as api from './api';

export type GetCharactersAction = (
  page?: number, 
  name?: string, 
  status?: string,
  gender?: string
) => IGetCharactersActionType;

export const getCharactersAction: GetCharactersAction = (
  page?: number, 
  name?: string, 
  status?: string, 
  gender?: string
) => ({
  type: CharactersActionTypeKeys.GET_CHARACTERS,
  payload: api.getCharacters(page, name, status, gender)
});

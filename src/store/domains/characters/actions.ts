import { IThunk } from 'types';

import  { CharactersActionTypeKeys, IGetCharactersActionType } from './actionTypes';
import * as api from './api';

type GetCharactersAction = () => IGetCharactersActionType;

type GetCharactersPageExactAction = (pageId: string) => IGetCharactersActionType;

export const getCharactersAction: GetCharactersAction = () => ({
  type: CharactersActionTypeKeys.GET_CHARACTERS,
  payload: api.getCharacters('')
});

export const getCharactersPageExactAction: GetCharactersPageExactAction = (pageId: string) => ({
  type: CharactersActionTypeKeys.GET_CHARACTERS,
  payload: api.getCharacters(pageId)
});

export type HandleGetCharactersAction = () => IThunk<void>;
export type HandleGetCharactersPageExactAction = (pageId: string) => IThunk<void>;

export const handleGetCharactersAction: HandleGetCharactersAction = () => (dispatch, getState) => {
  dispatch(getCharactersAction());
};

export const handleGetCharactersPageExactAction: HandleGetCharactersPageExactAction = (pageId: string) => 
(dispatch, getState) => {
  dispatch(getCharactersPageExactAction(pageId));
};

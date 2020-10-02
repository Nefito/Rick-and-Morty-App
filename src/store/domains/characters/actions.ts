import { IThunk } from 'types';

import  { CharactersActionTypeKeys, IGetCharactersActionType } from './actionTypes';
import * as api from './api';

type GetCharactersAction = () => IGetCharactersActionType;

export const getCharactersAction: GetCharactersAction = () => ({
  type: CharactersActionTypeKeys.GET_CHARACTERS,
  payload: api.getCharacters()
});

export type HandleGetCharactersAction = () => IThunk<void>;

export const handleGetCharactersAction: HandleGetCharactersAction = () => (dispatch, getState) => {
  dispatch(getCharactersAction());
};

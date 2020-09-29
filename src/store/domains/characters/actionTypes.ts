import { IPromiseAction } from 'types';

import { IErrorResponse } from '../types';
import { IGetCharactersResponse } from './types';

export enum CharacterActionTypeKeys {
  GET_CHARACTERS = 'characters/GET_CHARACTERS',
  GET_CHARACTERS_FULFILLED = 'characters/GET_CHARACTERS_FULFILLED',
  GET_CHARACTERS_REJECTED  = 'characters/GET_CHARACTERS_REJECTED'
}

export interface IGetCharactersActionType extends 
  IPromiseAction<CharacterActionTypeKeys.GET_CHARACTERS, Promise<IGetCharactersResponse>> {}

export interface IGetCharactersFulfilledActionType extends 
  IPromiseAction<CharacterActionTypeKeys.GET_CHARACTERS_FULFILLED, IGetCharactersResponse> {}

export interface IGetCharactersRejectedActionType extends
  IPromiseAction<CharacterActionTypeKeys.GET_CHARACTERS_REJECTED, IErrorResponse> {}

export type CharactersActionTypes = IGetCharactersFulfilledActionType | IGetCharactersRejectedActionType;

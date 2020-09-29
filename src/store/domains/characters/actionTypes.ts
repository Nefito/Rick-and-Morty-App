import { IPromiseAction } from 'types';

import { CharactersType } from './types';

export enum CharacterActionTypeKeys {
  GET_CHARACTERS = 'characters/GET_CHARACTERS',
  GET_CHARACTERS_FULFILLED = 'characters/GET_CHARACTERS_FULFILLED',
  GET_CHARACTERS_REJECTED  = 'characters/GET_CHARACTERS_REJECTED'
}

export interface IGetCharactersActionType extends 
  IPromiseAction<CharacterActionTypeKeys.GET_CHARACTERS, Promise<CharactersType>> {}

export interface IGetCharactersFulfilledActionType extends 
  IPromiseAction<CharacterActionTypeKeys.GET_CHARACTERS_FULFILLED, CharactersType> {}

export interface IGetCharactersRejectedActionType extends
  IPromiseAction<CharacterActionTypeKeys.GET_CHARACTERS_REJECTED, CharactersType> {}

export type CharactersActionTypes = IGetCharactersFulfilledActionType | IGetCharactersRejectedActionType;

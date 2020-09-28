import { IPromiseAction } from 'types';

export enum CharacterActionTypeKeys {
  CHARACTERS_FAILED  = 'characters/CHARACTERS_FAILED',
  GET_CHARACTERS = 'characters/GET_CHARACTERS',
  GET_CHARACTERS_FULFILLED = 'characters/GET_CHARACTERS_FULFILLED'
}

export interface IGetCharactersActionType extends 
  IPromiseAction<CharacterActionTypeKeys.GET_CHARACTERS, Promise<any>> {}

export interface IGetCharactersFulfilledActionType extends 
  IPromiseAction<CharacterActionTypeKeys.GET_CHARACTERS_FULFILLED, any> {}

export type CharactersActionTypes = IGetCharactersFulfilledActionType;

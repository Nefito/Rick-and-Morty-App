import { IPromiseAction } from 'types';

export enum CharacterActionTypeKeys {
  GET_CHARACTERS = 'characters/GET_CHARACTERS',
  GET_CHARACTERS_FULFILLED = 'characters/GET_CHARACTERS_FULFILLED',
  GET_CHARACTERS_REJECTED  = 'characters/GET_CHARACTERS_REJECTED'
}

export interface IGetCharactersActionType extends 
  IPromiseAction<CharacterActionTypeKeys.GET_CHARACTERS, Promise<any>> {}

export interface IGetCharactersFulfilledActionType extends 
  IPromiseAction<CharacterActionTypeKeys.GET_CHARACTERS_FULFILLED, any> {}

export interface IGetCharactersRejectedActionType extends
  IPromiseAction<CharacterActionTypeKeys.GET_CHARACTERS_REJECTED, any> {}

export type CharactersActionTypes = IGetCharactersFulfilledActionType | IGetCharactersRejectedActionType;

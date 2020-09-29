import { IPromiseAction } from 'types';

import { CharactersPromiseType, ICharactersFulFilled, ICharactersRejected } from './types';

export enum CharacterActionTypeKeys {
  GET_CHARACTERS = 'characters/GET_CHARACTERS',
  GET_CHARACTERS_FULFILLED = 'characters/GET_CHARACTERS_FULFILLED',
  GET_CHARACTERS_REJECTED  = 'characters/GET_CHARACTERS_REJECTED'
}

export interface IGetCharactersActionType extends 
  IPromiseAction<CharacterActionTypeKeys.GET_CHARACTERS, Promise<CharactersPromiseType>> {}

export interface IGetCharactersFulfilledActionType extends 
  IPromiseAction<CharacterActionTypeKeys.GET_CHARACTERS_FULFILLED, ICharactersFulFilled> {}

export interface IGetCharactersRejectedActionType extends
  IPromiseAction<CharacterActionTypeKeys.GET_CHARACTERS_REJECTED, ICharactersRejected> {}

export type CharactersActionTypes = IGetCharactersFulfilledActionType | IGetCharactersRejectedActionType;

import { IPromiseFulfilled, IPromiseRejected } from '../../types';

interface ISingleCharacter {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharactersFulFilled extends IPromiseFulfilled {
  results: ISingleCharacter[];
}

export interface ICharactersRejected extends IPromiseRejected {}

export type CharactersPromiseType = ICharactersRejected | ICharactersFulFilled;

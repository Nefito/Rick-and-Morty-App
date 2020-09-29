import { IPaginationResponse } from '../types';

export interface ICharacter {
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

export interface IGetCharactersResponse extends IPaginationResponse {
  results: ICharacter[];
}

export interface ICharactersInitialState {
  isLoading: boolean;
  errMess: string | null;
  characters: ICharacter[];
}

export interface ICharacterState extends ICharactersInitialState {}

import { IPaginationResponse } from '../types';

export enum LifeStatusConst {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown'
}

export enum GenderConst {
  Male = 'Male',
  Female = 'Female',
  Genderless = 'Genderless',
  Unknown = 'unknown'
}

export interface ICharacter {
  id: number;
  name: string;
  status: LifeStatusConst;
  species: string;
  type: string;
  gender: GenderConst;
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

export interface IGetCharactersResponse {
  info: IPaginationResponse;
  results: ICharacter[];
}

export interface ICharactersInitialState {
  isLoading: boolean;
  errMess: string | null;
  characters: {
    info: IPaginationResponse | null;
    results: ICharacter[];
  };
}

export interface ICharacterState extends ICharactersInitialState {}

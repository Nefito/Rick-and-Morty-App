import { IPaginationResponse } from '../types';

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface IGetEpisodesResponse {
  info: IPaginationResponse;
  results: IEpisode[];
}

export interface IEpisodesInitialState {
  isLoading: boolean;
  errMess: string | null;
  episodes: {
    info: IPaginationResponse | null;
    results: IEpisode[];
  };
}

export interface IEpisodesState extends IEpisodesInitialState {}

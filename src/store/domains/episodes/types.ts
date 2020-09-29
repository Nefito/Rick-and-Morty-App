import { IPromiseFulfilled, IPromiseRejected } from '../../types';


export interface ISingleEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface IEpisodesFulfilled extends IPromiseFulfilled {
  results: ISingleEpisode[];
}

export interface IEpisodesRejected extends IPromiseRejected {}

export type EpisodesPromiseType = IEpisodesFulfilled | IEpisodesRejected;

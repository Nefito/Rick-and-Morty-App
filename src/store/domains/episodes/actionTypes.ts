import { IPromiseAction } from 'types';

import { EpisodesPromiseType, IEpisodesFulfilled, IEpisodesRejected } from './types';

export enum EpisodesActionTypeKeys { 
  GET_EPISODES = 'episodes/ADD_EPISODES',
  GET_EPISODES_FULFILLED = 'episodes/GET_EPISODES_FULFILLED',
  GET_EPISODES_REJECTED = 'episodes/GET_EPISODES_REJECTED',
}

export interface IGetEpisodesActionType extends 
  IPromiseAction<EpisodesActionTypeKeys.GET_EPISODES, Promise<EpisodesPromiseType>> {}

export interface IGetEpisodesFulfilledActionType extends 
  IPromiseAction<EpisodesActionTypeKeys.GET_EPISODES_FULFILLED, IEpisodesFulfilled> {}

export interface IGetEpisodesRejectedActionType extends 
  IPromiseAction<EpisodesActionTypeKeys.GET_EPISODES_REJECTED, IEpisodesRejected> {} 

export type EpisodesActionTypes = IGetEpisodesFulfilledActionType | IGetEpisodesRejectedActionType;

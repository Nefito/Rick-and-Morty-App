import { IPromiseAction } from 'types';

import { IErrorResponse } from '../types';
import { IGetEpisodesResponse } from './types';

export enum EpisodesActionTypeKeys { 
  GET_EPISODES = 'episodes/GET_EPISODES',
  GET_EPISODES_FULFILLED = 'episodes/GET_EPISODES_FULFILLED',
  GET_EPISODES_REJECTED = 'episodes/GET_EPISODES_REJECTED',
}

export interface IGetEpisodesActionType extends 
  IPromiseAction<EpisodesActionTypeKeys.GET_EPISODES, Promise<IGetEpisodesResponse>> {}

export interface IGetEpisodesFulfilledActionType extends 
  IPromiseAction<EpisodesActionTypeKeys.GET_EPISODES_FULFILLED, IGetEpisodesResponse> {}

export interface IGetEpisodesRejectedActionType extends 
  IPromiseAction<EpisodesActionTypeKeys.GET_EPISODES_REJECTED, IErrorResponse> {} 

export type EpisodesActionTypes = IGetEpisodesFulfilledActionType | IGetEpisodesRejectedActionType;

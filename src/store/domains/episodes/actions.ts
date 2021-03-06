import { EpisodesActionTypeKeys, IGetEpisodesActionType } from './actionTypes';
import * as api from './api';

export type GetEpisodesAction = (page?: number, name?: string, season?: number) =>  IGetEpisodesActionType;

export const getEpisodesAction: GetEpisodesAction = (page?: number, name?: string, season?: number) => ({
  type: EpisodesActionTypeKeys.GET_EPISODES,
  payload: api.getEpisodes(page, name, season)
});

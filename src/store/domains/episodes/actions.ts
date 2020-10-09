import { EpisodesActionTypeKeys, IGetEpisodesActionType } from './actionTypes';
import * as api from './api';

export type GetEpisodesAction = (page?: number) =>  IGetEpisodesActionType;

export const getEpisodesAction: GetEpisodesAction = (page?: number) => ({
  type: EpisodesActionTypeKeys.GET_EPISODES,
  payload: api.getEpisodes(page)
});

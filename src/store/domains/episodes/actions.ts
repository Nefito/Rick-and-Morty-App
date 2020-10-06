import { IThunk } from 'types';

import { EpisodesActionTypeKeys, IGetEpisodesActionType } from './actionTypes';
import * as api from './api';

type GetEpisodesAction = () =>  IGetEpisodesActionType;

export const getEpisodesAction: GetEpisodesAction = () => ({
  type: EpisodesActionTypeKeys.GET_EPISODES,
  payload: api.getEpisodes()
});

export type HandleGetEpisodesAction = () => IThunk<void>;

export const handleGetEpisodesAction: HandleGetEpisodesAction = () => (dispatch, getState) => {
  dispatch(getEpisodesAction());
};

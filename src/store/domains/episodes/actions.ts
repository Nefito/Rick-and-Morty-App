import { apiClientService } from 'services'; 

import { DispatchAction, IAction } from '../../types';
import EpisodesActionTypeKeys from './actionTypes';

export const episodesLoading = (): IAction => ({
  type: EpisodesActionTypeKeys.EPISODES_LOADING
});

export const episodesFailed = (errMess: string): IAction => ({
  type: EpisodesActionTypeKeys.EPISODES_FAILED,
  payload: errMess
});

export const addEpisodes = (episodes: object): IAction => ({
  type: EpisodesActionTypeKeys.GET_EPISODES,
  payload: episodes
});

export const fetchEpisodes = () => (dispatch: DispatchAction) => {
  dispatch(episodesLoading());

  return apiClientService.get('episode')
    .then(response =>  response,
    error => {
      const errMess = new Error(error.message);
      throw errMess;
    })
    .then(episodes => dispatch(addEpisodes(episodes)))
    .catch(error => dispatch(episodesFailed(error.message)));
};

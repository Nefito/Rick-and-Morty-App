import { apiClientService } from 'services'; 

import { DispatchAction, IAction } from '../index';
import { ActionTypes } from './actionTypes';

export const episodesLoading = (): IAction => ({
  type: ActionTypes.EPISODES_LOADING
});

export const episodesFailed = (errMess: string): IAction => ({
  type: ActionTypes.EPISODES_FAILED,
  payload: errMess
});

export const addEpisodes = (episodes: object): IAction => ({
  type: ActionTypes.ADD_EPISODES,
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

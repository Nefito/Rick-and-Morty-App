import  { EpisodesActionTypeKeys, IGetEpisodesActionType } from './actionTypes';
import * as api from './api';

// export const episodesFailed = (errMess: string): IAction => ({
//   type: EpisodesActionTypeKeys.EPISODES_FAILED,
//   payload: errMess
// });

type GetEpisodesAction = () =>  IGetEpisodesActionType;

export const getEpisodesAction: GetEpisodesAction = () => ({
  type: EpisodesActionTypeKeys.GET_EPISODES,
  payload: api.getEpisodes()
});

// export const fetchEpisodes = () => (dispatch: DispatchAction) => {
//   dispatch(episodesLoading());

//   return apiClientService.get('episode')
//     .then(response =>  response,
//     error => {
//       const errMess = new Error(error.message);
//       throw errMess;
//     })
//     .then(episodes => dispatch(addEpisodes(episodes)))
//     .catch(error => dispatch(episodesFailed(error.message)));
// };

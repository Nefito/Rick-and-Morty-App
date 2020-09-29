import { EpisodesActionTypeKeys, EpisodesActionTypes } from './actionTypes';
import { IEpisodesInitialState } from './types';

const episodesInitialState: IEpisodesInitialState = {
  isLoading: true, 
  errMess: null, 
  episodes: []
};

const episodesReducer = (state = episodesInitialState, action: EpisodesActionTypes) => {

  switch (action.type) {
    case EpisodesActionTypeKeys.GET_EPISODES_FULFILLED:
      return { ...state, isLoading: false, errMess: null, episodes: action.payload };

    case EpisodesActionTypeKeys.GET_EPISODES_REJECTED:
      // tslint:disable-next-line: max-line-length
      return { ...state, isLoading: false, errMess: `Error:${action.payload.statusCode} ${action.payload.text}`, episodes: [] };

    // case EpisodesActionTypeKeys.EPISODES_LOADING:
    //   return { ...state, isLoading: true, errMess: null, episodes: [] };

    default:
      return state;
  }
};

export default episodesReducer;

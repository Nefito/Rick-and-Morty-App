import { EpisodesActionTypeKeys, EpisodesActionTypes } from './actionTypes';
import { IEpisodesInitialState } from './types';

const episodesInitialState: IEpisodesInitialState = {
  isLoading: true, 
  errMess: null, 
  episodes: {
    info: null,
    results: []
  }
};

const episodesReducer = (state = episodesInitialState, action: EpisodesActionTypes): IEpisodesInitialState => {

  switch (action.type) {
    case EpisodesActionTypeKeys.GET_EPISODES_FULFILLED:
      return { ...state, isLoading: false, errMess: null, episodes: action.payload };

    case EpisodesActionTypeKeys.GET_EPISODES_REJECTED:
      // tslint:disable-next-line: max-line-length
      return { ...state, isLoading: false, errMess: `Error:${action.payload.statusCode} ${action.payload.text}`, episodes: { info: null, results: [] } };

    default:
      return state;
  }
};

export default episodesReducer;

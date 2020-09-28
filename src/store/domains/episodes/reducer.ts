import { IStateSlice } from '../../types';
import { EpisodesActionTypeKeys, EpisodesActionTypes } from './actionTypes';

const episodesInitialState: IStateSlice = {
  isLoading: true, 
  errMess: null, 
  episodes: []
};

const episodesReducer = (state = episodesInitialState, action: EpisodesActionTypes) => {

  switch (action.type) {
    case EpisodesActionTypeKeys.GET_EPISODES_FULFILLED:
      return { ...state, isLoading: false, errMess: null, episodes: action.payload };

    case EpisodesActionTypeKeys.GET_EPISODES_REJECTED:
      return { ...state, isLoading: false, errMess: action.payload, episodes: [] };

    // case EpisodesActionTypeKeys.EPISODES_LOADING:
    //   return { ...state, isLoading: true, errMess: null, episodes: [] };

    default:
      return state;
  }
};

export default episodesReducer;

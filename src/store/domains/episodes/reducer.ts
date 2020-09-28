import { IAction, IStateSlice } from '../../types';
import EpisodesActionTypeKeys from './actionTypes';

const episodesReducer = (
    state: IStateSlice = { isLoading: true, errMess: null, episodes: [] }, action: IAction) => {
  switch (action.type) {
    case EpisodesActionTypeKeys.GET_EPISODES:
      return { ...state, isLoading: false, errMess: null, episodes: action.payload };

    case EpisodesActionTypeKeys.EPISODES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, episodes: [] };

    case EpisodesActionTypeKeys.EPISODES_LOADING:
      return { ...state, isLoading: true, errMess: null, episodes: [] };

    default:
      return state;
  }
};

export default episodesReducer;

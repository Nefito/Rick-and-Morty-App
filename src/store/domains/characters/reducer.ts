import { IAction, IStateSlice } from '../../types';
import  CharacterActionTypeKeys from './actionTypes';

const charactersReducer = (
    state: IStateSlice = { isLoading: true, errMess: null, characters: [] }, action: IAction) => {

  switch (action.type) {
    case CharacterActionTypeKeys.GET_CHARACTERS:
      return { ...state, isLoading: false, errMess: null, characters: action.payload };

    case CharacterActionTypeKeys.CHARACTERS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, characters: [] };

    case CharacterActionTypeKeys.CHARACTERS_LOADING:
      return { ...state, isLoading: true, errMess: null, characters: [] };

    default:
      return state;
  }
};

export default charactersReducer;

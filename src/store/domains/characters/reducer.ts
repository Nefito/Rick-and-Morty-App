import { IStateSlice } from '../../types';
import { CharacterActionTypeKeys, CharactersActionTypes } from './actionTypes';

const charactersInitialState: IStateSlice = {
  isLoading: true, 
  errMess: null, 
  characters: []
};

const charactersReducer = (state = charactersInitialState, action: CharactersActionTypes) => {

  switch (action.type) {
    case CharacterActionTypeKeys.GET_CHARACTERS_FULFILLED:
      return { ...state, isLoading: false, errMess: null, characters: action.payload };

    case CharacterActionTypeKeys.GET_CHARACTERS_REJECTED:
      // tslint:disable-next-line: max-line-length
      return { ...state, isLoading: false, errMess: action.payload/*`Error:${action.payload.statusCode} ${action.payload.text}`*/, characters: [] };

    // case CharacterActionTypeKeys.CHARACTERS_LOADING:
    //   return { ...state, isLoading: true, errMess: null, characters: [] };

    default:
      return state;
  }
};

export default charactersReducer;

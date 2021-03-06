import { CharactersActionTypeKeys, CharactersActionTypes } from './actionTypes';
import { ICharactersInitialState } from './types';

const charactersInitialState: ICharactersInitialState = {
  isLoading: true, 
  errMess: null, 
  characters: {
    info: null,
    results: []
  }
};

const charactersReducer = (state = charactersInitialState, action: CharactersActionTypes): ICharactersInitialState => {

  switch (action.type) {
    case CharactersActionTypeKeys.GET_CHARACTERS_FULFILLED:
      return { ...state, isLoading: false, errMess: null, characters: action.payload };

    case CharactersActionTypeKeys.GET_CHARACTERS_REJECTED:
      return { 
        ...state, 
        isLoading: false, 
        errMess: `Error:${action.payload.statusCode} ${action.payload.text}`, 
        characters: { info: null, results: [] } 
      };
      
    default:
      return state;
  }
};

export default charactersReducer;

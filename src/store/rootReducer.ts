import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import charactersReducer from './domains/characters/reducer';
import episodesReducer from './domains/episodes/reducer';
import locationsReducer from './domains/locations/reducer';

const createRootReducer = (history: History) => 
  combineReducers({
    router: connectRouter(history),
    characters: charactersReducer,
    locations: locationsReducer,
    episodes: episodesReducer,
  });

export default createRootReducer;

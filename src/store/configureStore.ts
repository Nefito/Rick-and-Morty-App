import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Characters } from './characters';
import { Episodes } from './episodes';
import { Locations } from './locations';

const rootReducer = combineReducers({
  characters: Characters,
  locations: Locations,
  episodes: Episodes
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

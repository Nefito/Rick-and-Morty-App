import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Characters, Episodes, Locations } from 'store';

const rootReducer = combineReducers({
  characters: Characters,
  locations: Locations,
  episodes: Episodes
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

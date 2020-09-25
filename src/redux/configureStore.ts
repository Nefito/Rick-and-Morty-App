import { combineReducers, createStore } from 'redux';
import { Characters } from './characters';
import { Episodes } from './episodes';
import { Locations } from './locations';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      characters: Characters,
      locations: Locations,
      episodes: Episodes
    })
  );
  return store;
};

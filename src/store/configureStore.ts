import { combineReducers, createStore } from 'redux';
import { Characters } from './characters';
import { Episodes } from './episodes';
import { Locations } from './locations';

interface IStore  {
  characters: object;
  locations: object;
  episodes: object;
}

export const store: IStore = createStore(
  combineReducers({
    characters: Characters,
    locations: Locations,
    episodes: Episodes
  })
);

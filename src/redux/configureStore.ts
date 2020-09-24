import { createStore, combineReducers } from 'redux';
import { Characters } from './characters';
import { Locations } from './locations';
import { Episodes } from './episodes';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            characters: Characters,
            locations: Locations,
            episodes: Episodes
        })
    );
    return store;
}

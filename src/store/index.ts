
export interface IAction {
  type: string;
  payload?: any;
}

export interface IStateSlice {
  isLoading: boolean;
  errMess: string | null;
  [propName: string]: any;
}

export type DispatchAction = (arg: IAction) => (IAction);

export { default as Characters } from './characters/charactersReducer';
export { default as Locations } from './locations/locationsReducer';
export { default as Episodes } from './locations/locationsReducer';

export { fetchCharacters, addCharacters, charactersFailed, charactersLoading } from './characters/actions';
export { fetchEpisodes, addEpisodes, episodesFailed, episodesLoading } from './episodes/actions';
export { fetchLocations, addLocations, locationsFailed, locationsLoading } from './locations/actions';

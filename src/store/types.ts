import { ICharacterState, IEpisodesState, ILocationsState } from './domains';

export interface IStoreState {
  characters: ICharacterState;
  episodes: IEpisodesState;
  locations: ILocationsState;
}

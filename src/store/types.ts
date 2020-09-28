export interface IStoreState {
  characters: any;
  episodes: any;
  locations: any;
}
  
export interface IStateSlice {
  isLoading: boolean;
  errMess: string | null;
  [propName: string]: any;
}
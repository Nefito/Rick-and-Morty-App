export interface IStoreState {
  characters: any;
  episodes: any;
  locations: any;
}

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

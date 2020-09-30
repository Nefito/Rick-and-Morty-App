import { IPaginationResponse } from '../types';

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface IGetLocationsResponse {
  info: IPaginationResponse;
  results: ILocation[];
}

export interface ILocationsInitialState {
  isLoading: boolean;
  errMess: string | null;
  locations: {
    info: IPaginationResponse | null;
    results: ILocation[];
  };
}

export interface ILocationsState extends ILocationsInitialState {}

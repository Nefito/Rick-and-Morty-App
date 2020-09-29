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

export interface IGetLocationsResponse extends IPaginationResponse {
  results: ILocation[];
}

export interface ILocationsInitialState {
  isLoading: boolean;
  errMess: string | null;
  locations: ILocation[];
}

export interface ILocationsState extends ILocationsInitialState {}

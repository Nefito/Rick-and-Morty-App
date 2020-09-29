import { IPromiseFulfilled, IPromiseRejected } from '../../types';

export interface ISingleLocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface ILocationsFulfilled extends IPromiseFulfilled {
  results: ISingleLocation[];
}

export interface ILocationsRejected extends IPromiseRejected {}

export type LocationsPromiseType = ILocationsFulfilled | ILocationsRejected;

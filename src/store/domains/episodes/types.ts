export interface ISingleEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface IEpisodesFulfilled {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ISingleEpisode[];
}

export interface IEpisodesRejected {
  req: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    headers: object;
  };
  xhr: object;
  text: string;
  statusText: string;
  statusCode: number;
  status: number;
  statusType: number;
  info: boolean;
  ok: boolean;
  redirect: boolean;
  clientError: boolean;
  serverError: boolean;
  error: {
    status: number;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
  };
  created: boolean;
  accepted: boolean;
  noContent: boolean;
  badRequest: boolean;
  unauthorized: boolean;
  notAcceptable: boolean;
  forbidden: boolean;
  notFound: boolean;
  unprocessableEntity: boolean;
  headers: {
    'content-length': string;
    'content-type': string;
  };
  header: {
    'content-length': string;
    'content-type': string;
  };
  type: string;
  charset: string;
  body: {
    error: string;
  };
}

export type EpisodesPromiseType = IEpisodesFulfilled | IEpisodesRejected;

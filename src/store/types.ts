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

export interface IPromiseFulfilled {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

export interface IPromiseRejected {
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
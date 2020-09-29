interface ISingleCharacter {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ICharactersFulFilled {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ISingleCharacter[];
}

interface ICharactersRejected {
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

export type CharactersType = ICharactersFulFilled | ICharactersRejected;

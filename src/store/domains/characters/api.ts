import { apiClientService } from 'services';

export const getCharacters = (page?: number) => { 
  return page ? apiClientService.get(`character/?page=${page}`) : apiClientService.get('character');
};

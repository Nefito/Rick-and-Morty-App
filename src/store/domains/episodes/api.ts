import { apiClientService } from 'services';

export const getEpisodes = (page?: number) => { 
  return page ? apiClientService.get(`episode/?page=${page}`) : apiClientService.get('episode');
};

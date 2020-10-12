import { apiClientService } from 'services';

export const getEpisodes = (page: number | string = '', name: string = '') => { 
  return apiClientService.get(`episode/?page=${page}&name=${name}`);
};

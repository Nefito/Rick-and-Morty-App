import { apiClientService } from 'services';

export const getLocations = (page: number | string = '', name: string = '') => { 
  return apiClientService.get(`location/?page=${page}&name=${name}`);
};

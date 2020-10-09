import { apiClientService } from 'services';

export const getLocations = (page?: number) => { 
  return page ? apiClientService.get(`location/?page=${page}`) : apiClientService.get('location');
};

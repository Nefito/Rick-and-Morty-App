import { apiClientService } from 'services';

export const getCharacters = (page: number | string = '', name: string = '', status: string = '') => { 
  return apiClientService.get(`character/?page=${page}&name=${name}&status=${status}`);
};

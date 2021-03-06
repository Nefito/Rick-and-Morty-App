import { apiClientService } from 'services';

// export const getCharacters = (page: number | string = '', name: string = '', status: string = '') => { 
//   return apiClientService.get(`character/?page=${page}&name=${name}&status=${status}`);
// };
export const getCharacters = (
  page: number | string = '', 
  name: string = '', 
  status: string = '', 
  gender: string = ''
) => {
  let url = 'character/?';
  if (page) {
    url += `page=${page}&`;
  }
  if (name) {
    url += `name=${name}&`;
  }
  if (status) {
    url += `status=${status}&`;
  }
  if (gender) {
    url += `gender=${gender}&`;
  }
  return apiClientService.get(url);
};

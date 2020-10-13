import { apiClientService } from 'services';

export const getLocations = (
  page: number | string = '',
  name: string = '',
  type: string = '',
  dimension: string = '',
) => {
  let url = 'location/?';
  if (page) {
    url += `page=${page}&`;
  }
  if (name) {
    url += `name=${name}&`;
  }
  if (type) {
    url += `type=${type}&`;
  }
  if (dimension) {
    url += `dimension=${dimension}&`;
  }
  return apiClientService.get(url);
};

import { apiClientService } from 'services';

export const getEpisodes = (
  page: number | string = '', 
  name: string = '', 
  season: number | string = ''
) => {
  let url = 'episode/?';

  if (page) {
    url += `page=${page}&`;
  }
  if (name) {
    url += `name=${name}&`;
  }
  if (season) {
    url += `episode=S0${season}&`;
  }
  return apiClientService.get(url);
};

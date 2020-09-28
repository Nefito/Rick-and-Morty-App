import { apiClientService } from 'services';

export const getEpisodes = () => apiClientService.get('episode/');

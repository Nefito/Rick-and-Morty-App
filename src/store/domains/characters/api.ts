import { apiClientService } from 'services';

export const getCharacters = () => apiClientService.get('character/');

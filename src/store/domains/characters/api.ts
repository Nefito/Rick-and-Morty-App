import { apiClientService } from 'services';

export const getCharacter = () => apiClientService.get('character/');

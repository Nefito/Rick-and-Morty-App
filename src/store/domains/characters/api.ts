import { apiClientService } from 'services';

export const getCharacters = (pageId: string) => apiClientService.get(`character/?page=${pageId}`);

import { apiClientService } from 'services';

export const getLocations = () => apiClientService.get('location/');

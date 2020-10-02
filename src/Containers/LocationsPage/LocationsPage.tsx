import React from 'react';

import { LocationCardList } from 'components';
import { ILocation } from 'store';

interface ILocationsPage {
  locations: ILocation[];
}

const CharactersPage: React.FC<ILocationsPage> = (props) => {
  const { locations } = props;
  return (
    <LocationCardList locations={locations} />
  );
}

export default CharactersPage;

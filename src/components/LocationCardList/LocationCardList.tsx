import React from 'react';

import { ILocation } from 'store';

import { LocationCard } from '../LocationCard';

interface ILocationCardList {
  locations: ILocation[];
}

const LocationCardList: React.FC<ILocationCardList> = (props) => {

  const { locations } = props;

  const cardList = locations.map(location => {
    return (
      <div key={location.id} >
        <LocationCard location={location} />
      </div>
    );
  });

  return (
    <div>
      { cardList }
    </div>
  );
};

export default LocationCardList;

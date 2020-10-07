import React from 'react';

import { ILocation } from 'store';

import { LocationCard, OuterCard } from '../Card';

interface ILocationCardList {
  locations: ILocation[];
}

const LocationCardList: React.FC<ILocationCardList> = (props) => {

  const { locations } = props;

  const cardList = locations.map(location => {
    return (
      <OuterCard key={location.id} >
        <LocationCard location={location} />
      </OuterCard>
    );
  });

  return (
    <div>
      { cardList }
    </div>
  );
};

export default LocationCardList;

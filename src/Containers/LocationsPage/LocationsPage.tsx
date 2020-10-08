import React, { useEffect } from 'react';

import { HandleGetLocationsAction, ILocationsInitialState  } from 'store';
import { styled } from 'theme';

import { LocationCardList } from './LocationCardList';

const Container = styled.div`
  text-align: center;
`;

interface ILocationsPage {
  locations: ILocationsInitialState;
  handleGetLocationsAction: HandleGetLocationsAction;
}

const LocationsPage: React.FC<ILocationsPage> = (props) => {
  const { locations, handleGetLocationsAction } = props;

  useEffect(() => { 
    handleGetLocationsAction();
  }, []);

  return (
    <Container>
      <LocationCardList locations={locations.locations.results} />
    </Container>
  );
};

export default LocationsPage;

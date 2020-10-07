import React, { useEffect } from 'react';

import { LocationCardList } from 'components';
import { HandleGetLocationsAction, ILocationsInitialState  } from 'store';
import { styled } from 'theme';

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

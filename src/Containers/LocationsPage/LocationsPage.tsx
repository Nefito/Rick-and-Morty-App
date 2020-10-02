import React from 'react';

import { LocationCardList } from 'components';
import { ILocation } from 'store';
import { styled } from 'theme';

interface ILocationsPage {
  locations: ILocation[];
}

const Container = styled.div`
  text-align: center;
`;

const CharactersPage: React.FC<ILocationsPage> = (props) => {
  const { locations } = props;
  return (
    <Container>
      <LocationCardList locations={locations} />
    </Container>
  );
};

export default CharactersPage;

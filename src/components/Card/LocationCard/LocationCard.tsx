import React from 'react';

import { LinkButton } from 'components';
import { ILocation } from 'store';
import { styled } from 'theme';

import { CardBodyWrapper } from '../Card/Card'; 
import { CardBodyItem } from '../CardBodyItem/CardBodyItem';
import { CharacterList, EpisodeLocationCardWrapper } from '../EpisodeLocationCard/EpisodeLocationCard';

const LocationCardWrapper = styled(EpisodeLocationCardWrapper)`
  .location-info {
    margin: 32px 0 10px 0;
  }
  .location-residents {
    margin: 16px 0 46px 0;
  }
`;

interface ILocationCard {
  location: ILocation;
}

export const LocationCard: React.FC<ILocationCard> = (props) => {
  const { location } = props;

  return (
    <LocationCardWrapper>
      <CardBodyWrapper>
        <div>
          <a href={location.url} className="card-text-name link-no-style">{location.name}</a>
        </div>
        <div>
          <CardBodyItem value={location.type} className="location-info" title="Type:" />
          <CardBodyItem value={location.dimension} className="location-info" title="Dimension:" />
        </div>
        <CharacterList characters={location.residents} className="location-residents" title="Residents" />
        <LinkButton to={`/locations/${location.id}/`} href="/">More...</LinkButton>
      </CardBodyWrapper>
    </LocationCardWrapper>
  );
};

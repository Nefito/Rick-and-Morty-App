import React from 'react';

import { LinkButton } from 'components';
import { ILocation } from 'store';
import { styled } from 'theme';

import { CardBodyWrapper } from '../Card/Card'; 
import { CardBodyItem } from '../CardBodyItem/CardBodyItem';
import { CharacterList, EpisodeLocationCardWrapper } from '../EpisodeLocationCard/EpisodeLocationCard';

const LocationCardWrapper = styled(EpisodeLocationCardWrapper)``;

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
          <CardBodyItem value={location.type} className="card-info" title="Type:" />
          <CardBodyItem value={location.dimension} className="card-info" title="Dimension:" />
        </div>
        <CharacterList characters={location.residents} className="card-characters" title="Residents" />
        <LinkButton to={`/locations/${location.id}/`} href="/">More...</LinkButton>
      </CardBodyWrapper>
    </LocationCardWrapper>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

import { CardLinkButton } from 'components';
import { ILocation } from 'store';
import { styled } from 'theme';

import { CardBodyWrapper } from './Card'; 
import { CardBodyItem } from './CardBodyItem';
import { CharacterList, EpisodeLocationCardWrapper } from './EpisodeLocationCard';

const LocationCardWrapper = styled(EpisodeLocationCardWrapper)``;

interface ILocationCard {
  location: ILocation;
}

export const LocationCard: React.FC<ILocationCard> = (props) => {
  const { location } = props;

  return (
    <LocationCardWrapper>
      <CardBodyWrapper>
        <Link to={`/locations/${location.id}/`} className="card-text-name link-no-style">{location.name}</Link>
        <CardBodyItem value={location.type} className="card-info" title="Type:" />
        <CardBodyItem value={location.dimension} className="card-info" title="Dimension:" />
        <CharacterList characters={location.residents} className="card-characters" title="Residents" />
        <CardLinkButton to={`/locations/${location.id}/`}>More...</CardLinkButton>
      </CardBodyWrapper>
    </LocationCardWrapper>
  );
};

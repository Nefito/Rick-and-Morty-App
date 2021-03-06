import React from 'react';
import { Link } from 'react-router-dom';

import { CardLinkButton } from 'components';
import { IEpisode } from 'store';
import { styled } from 'theme';

import { CardBodyWrapper } from './Card'; 
import { CardBodyItem } from './CardBodyItem';
import { CharacterList, EpisodeLocationCardWrapper } from './EpisodeLocationCard';

const EpisodeCardStyled = styled(EpisodeLocationCardWrapper)``;

interface IEpisodeCard {
  episode: IEpisode;
}

export const EpisodeCard: React.FC<IEpisodeCard> = (props) => {
  const { episode } = props;

  return (
    <EpisodeCardStyled>
      <CardBodyWrapper>
        <Link to={`/episodes/${episode.id}/`} className="card-text-name link-no-style">{episode.name}</Link>
        <CardBodyItem value={episode.episode} title="Episode:" className="card-info" />
        <CardBodyItem value={episode.air_date} title="Air Date:" className="card-info" />
        <CharacterList characters={episode.characters} className="card-characters" title="Characters" />
        <CardLinkButton to={`/episodes/${episode.id}/`}>More...</CardLinkButton>
      </CardBodyWrapper>
    </EpisodeCardStyled>
  );
};

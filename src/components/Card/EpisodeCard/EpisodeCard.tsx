
import React from 'react';

import { LinkButton } from 'components';
import { IEpisode } from 'store';
import { styled } from 'theme';

import { CardBodyWrapper } from '../Card/Card'; 
import { CardBodyItem } from '../CardBodyItem/CardBodyItem';
import { CharacterList, EpisodeLocationCardWrapper } from '../EpisodeLocationCard/EpisodeLocationCard';

const EpisodeCardStyled = styled(EpisodeLocationCardWrapper)``;

interface IEpisodeCard {
  episode: IEpisode;
}

export const EpisodeCard: React.FC<IEpisodeCard> = (props) => {
  const { episode } = props;

  return (
    <EpisodeCardStyled>
      <CardBodyWrapper>
        <div>
          <a href={episode.url} className="card-text-name link-no-style">{episode.name}</a>
        </div>
        <div>
          <CardBodyItem value={episode.episode} title="Episode:" className="card-info" />
          <CardBodyItem value={episode.air_date} title="Air Date:" className="card-info" />
        </div>
        <CharacterList characters={episode.characters} className="card-characters" title="Characters" />
        <LinkButton to={`/episodes/${episode.id}/`} href="/">More...</LinkButton>
      </CardBodyWrapper>
    </EpisodeCardStyled>
  );
};

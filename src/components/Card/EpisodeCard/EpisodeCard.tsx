
import React from 'react';

import { LinkButton } from 'components';
import { IEpisode } from 'store';
import { styled } from 'theme';

import { CardBodyWrapper } from '../Card/Card'; 
import { CardBodyItem } from '../CardBodyItem/CardBodyItem';
import { CharacterList, EpisodeLocationCardWrapper } from '../EpisodeLocationCard/EpisodeLocationCard';

const EpisodeCardStyled = styled(EpisodeLocationCardWrapper)`
  min-height: 456px;
  min-width: 400px;
  text-align: center;

  .episode-characters {
    margin: 16px 0 46px 0
  }
`;

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
          <CardBodyItem value={episode.episode} title="Episode:" />
          <CardBodyItem value={episode.air_date} title="Air Date:" />
        </div>
        <CharacterList characters={episode.characters} className="episode-characters" title="Characters" />
        <LinkButton to={`/episodes/${episode.id}/`} href="/">More...</LinkButton>
      </CardBodyWrapper>
    </EpisodeCardStyled>
  );
};

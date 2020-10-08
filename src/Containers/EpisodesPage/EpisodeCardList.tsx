import React from 'react';

import { IEpisode } from 'store';

import { EpisodeCard, OuterCard } from 'components';

interface IEpisodeCardList {
  episodes: IEpisode[];
}

export const EpisodeCardList: React.FC<IEpisodeCardList> = (props) => {
  const { episodes } = props;

  const cardList = episodes.map(episode => {
    return (
      <OuterCard key={episode.id} >
        <EpisodeCard episode={episode} />
      </OuterCard>
    );
  });

  return (
    <div>
      { cardList }
    </div>
  );
};

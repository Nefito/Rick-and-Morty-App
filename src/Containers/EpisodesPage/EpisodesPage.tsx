import React, { useEffect } from 'react';

import { HandleGetEpisodesAction, IEpisodesInitialState  } from 'store';
import { styled } from 'theme';

import { EpisodeCardList } from './EpisodeCardList';

const Container = styled.div`
  text-align: center;
`;

interface IEpisodesPage {
  episodes: IEpisodesInitialState;
  handleGetEpisodesAction: HandleGetEpisodesAction;
}

const EpisodesPage: React.FC<IEpisodesPage> = (props) => {
  const { episodes, handleGetEpisodesAction } = props;

  useEffect(() => { 
    handleGetEpisodesAction();
  }, []);

  return (
    <Container>
      <EpisodeCardList episodes={episodes.episodes.results} />
    </Container>
  );
};

export default EpisodesPage;

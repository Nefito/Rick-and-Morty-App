import React, { useEffect } from 'react';

import { EpisodeCardList } from 'components';
import { HandleGetEpisodesAction, IEpisodesInitialState  } from 'store';
import { styled } from 'theme';

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

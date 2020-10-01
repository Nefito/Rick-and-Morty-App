import React, { useEffect } from 'react';

import { CharacterCardList } from 'components';
import { HandleGetCharactersAction, ICharactersInitialState, IEpisodesInitialState, ILocationsInitialState } from 'store';

interface IMain {
  characters: ICharactersInitialState;
  episodes: IEpisodesInitialState;
  locations: ILocationsInitialState;
  handleGetCharactersAction: HandleGetCharactersAction;
}

const Main: React.FC<IMain> = (props) => {

  useEffect(() => {
    props.handleGetCharactersAction();
  }, []);

  const characters = props.characters.characters.results;
  
  return (
    <CharacterCardList characters={characters} />
  );
};

export default Main;

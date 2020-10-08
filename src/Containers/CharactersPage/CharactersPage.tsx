import React, { useEffect } from 'react';

import { HandleGetCharactersAction, ICharactersInitialState, } from 'store';
import { styled } from 'theme';

import { CharacterCardList } from './CharacterCardList';

const Container = styled.div`
  text-align: center;
`;

interface ICharactersPage {
  characters: ICharactersInitialState;
  handleGetCharactersAction: HandleGetCharactersAction;
}

const CharactersPage: React.FC<ICharactersPage> = (props) => {
  const { characters, handleGetCharactersAction } = props;

  useEffect(() => {
    handleGetCharactersAction();
  }, []);

  return (
    <Container>
      <CharacterCardList characters={characters.characters.results} />
    </Container>
  );
};

export default CharactersPage;

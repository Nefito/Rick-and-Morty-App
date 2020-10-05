import React from 'react';

import { CharacterCardList } from 'components';
import { ICharacter } from 'store';
import { styled } from 'theme';

interface ICharactersPage {
  characters: ICharacter[];
}

const Container = styled.div`
  text-align: center;
`;

const CharactersPage: React.FC<ICharactersPage> = (props) => {
  const { characters } = props;
  return (
    <Container>
      <CharacterCardList characters={characters} />
    </Container>
  );
};

export default CharactersPage;

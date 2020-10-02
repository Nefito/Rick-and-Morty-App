import React from 'react';

import { CharacterCardList } from 'components';
import { ICharacter } from 'store';

interface ICharactersPage {
  characters: ICharacter[];
}

const CharactersPage: React.FC<ICharactersPage> = (props) => {
  const { characters } = props;
  return (
    <CharacterCardList characters={characters} />
  );
}

export default CharactersPage;

import React from 'react';

import { CharacterCardList } from 'components';
import { ICharacter } from 'store';

interface ICharacterPage {
  characters: ICharacter[];
}

const CharactersPage: React.FC<ICharacterPage> = (props) => {
  const { characters } = props;
  return (
    <CharacterCardList characters={characters} />
  );
}

export default CharactersPage;

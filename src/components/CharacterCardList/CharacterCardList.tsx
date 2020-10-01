import React from 'react';

import { ICharacter } from 'store';

import { CharacterCard } from '../CharacterCard';

interface ICharacterCardList {
  characters: ICharacter[];
}

const CharacterCardList: React.FC<ICharacterCardList> = (props) => {

  const { characters } = props;

  const cardList = characters.map(character => {
    return (
      <div key={character.id} >
        <CharacterCard character={character} />
      </div>
    );
  });

  return (
    <div>
      { cardList }
    </div>
  );
};

export default CharacterCardList;

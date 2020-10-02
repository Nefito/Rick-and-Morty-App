import React from 'react';

import { ICharacter } from 'store';

import { CharacterCard } from '../CharacterCard';
import { OuterCard } from '../styles';

interface ICharacterCardList {
  characters: ICharacter[];
}

const CharacterCardList: React.FC<ICharacterCardList> = (props) => {

  const { characters } = props;

  const cardList = characters.map(character => {
    return (
      <OuterCard key={character.id} >
        <CharacterCard character={character} />
      </OuterCard>
    );
  });

  return (
    <div>
      { cardList }
    </div>
  );
};

export default CharacterCardList;

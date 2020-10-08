import React from 'react';

import { ICharacter } from 'store';

import { CharacterCard, OuterCard } from './Card';

interface ICharacterCardList {
  characters: ICharacter[];
}

export const CharacterCardList: React.FC<ICharacterCardList> = (props) => {

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

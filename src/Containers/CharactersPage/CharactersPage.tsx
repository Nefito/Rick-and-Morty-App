import React, { useEffect, useState } from 'react';

import { Search } from 'components';
import { HandleGetCharactersAction, ICharactersInitialState, } from 'store';
import { styled } from 'theme';

import { CharacterCardList } from './CharacterCardList';

const CharacterCardListWrapper = styled.div`
  text-align: center;
`;

interface ICharactersPage {
  characters: ICharactersInitialState;
  handleGetCharactersAction: HandleGetCharactersAction;
}

const CharactersPage: React.FC<ICharactersPage> = (props) => {
  const { characters, handleGetCharactersAction } = props;

  const charactersResults = characters.characters.results;

  const [searchItem, setSearchItem] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };

  useEffect(() => {
    handleGetCharactersAction();
  }, []);

  return (
    <>
      <Search placeholder="Search characters.." handleChange={handleChange} /> 
      <CharacterCardListWrapper>
        <CharacterCardList characters={charactersResults.filter(character => 
          character.name.toLowerCase().includes(searchItem.toLowerCase()))} />
      </CharacterCardListWrapper>
    </>
  );
};

export default CharactersPage;

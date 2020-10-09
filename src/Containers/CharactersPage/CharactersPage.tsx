import React, { useEffect, useState } from 'react';

import { iconsProps, itemRender, Pages, Search } from 'components';
import { ICharactersInitialState, IGetCharactersActionType, } from 'store';
import { styled } from 'theme';

import { CharacterCardList } from './CharacterCardList';

const CharacterCardListWrapper = styled.div`
  text-align: center;
`;

interface ICharactersPage {
  characters: ICharactersInitialState;
  getCharacters: (page?: number) => IGetCharactersActionType;
}

const itemsPerPage = 20;

const CharactersPage: React.FC<ICharactersPage> = (props) => {
  const { characters, getCharacters } = props;

  const charactersResults = characters.characters.results;

  const [searchItem, setSearchItem] = useState('');

  const handlePageChange = (page: number) => {
    getCharacters(page);
  };

  const totalItems = characters.characters.info ? characters.characters.info.count : itemsPerPage;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Search placeholder="Search characters.." handleChange={handleSearch} /> 
      <CharacterCardListWrapper>
        <CharacterCardList characters={charactersResults.filter(character => 
          character.name.toLowerCase().includes(searchItem.toLowerCase()))} />
      </CharacterCardListWrapper>
        <Pages
          itemRender={itemRender}
          total={totalItems}
          pageSize={itemsPerPage}
          onChange={handlePageChange} 
          {...iconsProps}
        />
    </div>
  );
};

export default CharactersPage;

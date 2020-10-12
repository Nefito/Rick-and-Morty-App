import React, { useEffect, useState } from 'react';

import { iconsProps, itemRender, Pages, PageWrapper, Search } from 'components';
import { ICharactersInitialState, IGetCharactersActionType, } from 'store';
import { styled } from 'theme';

import { CharacterCardList } from './CharacterCardList';

const SearchWrapper = styled.div`
  text-align: center;
  margin: 10px;
  padding: 5px;

  .search {
    background: ${({ theme }) => theme.colors.main};
    font-size: 20px;
    padding: 10px 0 3px 5px;
    border-radius: 8px;
    border-width: 4px;
  }
`;

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

  const [searchItem, setSearchItem] = useState('');

  const handlePageChange = (page: number) => {
    getCharacters(page);
  };
  
  const charactersResults = characters.characters.results;
  const totalItems = characters.characters.info ? characters.characters.info.count : itemsPerPage;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <PageWrapper>
      <SearchWrapper>
        <Search className="search" placeholder="Search characters.." handleChange={handleSearch} /> 
      </SearchWrapper>
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
    </PageWrapper>
  );
};

export default CharactersPage;

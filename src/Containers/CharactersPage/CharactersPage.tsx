import React, { useEffect, useState } from 'react';

import { Checkbox, iconsProps, itemRender, Pages, Search } from 'components';
import { ICharactersInitialState, IGetCharactersActionType, } from 'store';
import { styled } from 'theme';

import { CharacterCardList } from './CharacterCardList';

const PageWrapper = styled.div`
  min-height: 100vh; 
  display: flex;
  flex-direction: column;

  .checkbox {
    margin-top: 20px;
  }
`;

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
  getCharacters: (page?: number, name?: string) => IGetCharactersActionType;
}

const itemsPerPage = 20;

const CharactersPage: React.FC<ICharactersPage> = (props) => {
  const { characters, getCharacters } = props;

  const [searchItem, setSearchItem] = useState('');
  const [currPage, setCurrPage] = useState(1);
  const [check, setCheck] = useState(false);

  const handlePageChange = (page: number) => {
    getCharacters(page, searchItem);
    setCurrPage(page);
  };
  
  const handleCheckboxChange = (event: any) => setCheck(!check);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
    searchItem.length > 1 ? getCharacters(1, event.target.value) : getCharacters(currPage);
    setCurrPage(1);
  };
  
  useEffect(() => {
    getCharacters();
  }, []);
  
  const charactersResults = characters.characters.results;
  const totalItems = characters.characters.info ? characters.characters.info.count : itemsPerPage;
  
  return (
    <PageWrapper>
      <Checkbox checked={check} onChange={handleCheckboxChange} labelText="Label text" className="checkbox" />
      <SearchWrapper>
        <Search className="search" placeholder="Search characters.." handleChange={handleSearch} /> 
      </SearchWrapper>
      <CharacterCardListWrapper>
        <CharacterCardList characters={charactersResults} />
      </CharacterCardListWrapper>
        <Pages
          itemRender={itemRender}
          total={totalItems}
          pageSize={itemsPerPage}
          onChange={handlePageChange} 
          {...iconsProps}
          current={currPage}
        />
    </PageWrapper>
  );
};

export default CharactersPage;

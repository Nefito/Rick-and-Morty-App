import React, { useEffect, useState } from 'react';

import { Checkbox, iconsProps, itemRender, Pages, Search } from 'components';
import { ICharactersInitialState, IGetCharactersActionType, } from 'store';
import { styled } from 'theme';

import { CharacterCardList } from './CharacterCardList';

const PageWrapper = styled.div`
  min-height: 100vh; 
  display: flex;
  flex-direction: column;

  .checkbox-wrapper {
    display: inline;
    text-align: center;
    border-radius: 8px;
    border-color: white;
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.text};
    padding: 8px 10px;
    margin: 20px;

    .checkbox {
      border: 1px solid ${({ theme }) => theme.colors.text};
      margin-right: 2px;
    }
  }
`;

const CheckboxGroup = styled.div`
  text-align: right;
  margin-top: 20px;
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
  getCharacters: (page?: number, name?: string, status?: string) => IGetCharactersActionType;
}

const itemsPerPage = 20;

const CharactersPage: React.FC<ICharactersPage> = (props) => {
  const { characters, getCharacters } = props;

  const [searchItem, setSearchItem] = useState('');
  const [currPage, setCurrPage] = useState(1);
  const [aliveFilter, setAliveFilter] = useState(false);
  const [deadFilter, setDeadFilter] = useState(false);
  const [unknownFilter, setUnknownFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState('');

  const handlePageChange = (page: number) => {
    getCharacters(page, searchItem, activeFilter);
    setCurrPage(page);
  };
  
  const handleAlive = () => {
    if (!aliveFilter) {
      setAliveFilter(true);
      setDeadFilter(false);
      setUnknownFilter(false);
      setActiveFilter('alive');
      getCharacters(1, searchItem, 'alive');
      setCurrPage(1);
    } else {
      setAliveFilter(false);
      setActiveFilter('');
      getCharacters(currPage, searchItem);
      setCurrPage(1);
    }
  };

  const handleDead = () => {
    if (!deadFilter) {
      setDeadFilter(true);
      setAliveFilter(false);
      setUnknownFilter(false);
      setActiveFilter('dead');
      getCharacters(1, searchItem, 'dead');
      setCurrPage(1);
    } else {
      setActiveFilter('');
      setDeadFilter(false);
      getCharacters(currPage, searchItem);
      setCurrPage(1);
    }
  };

  const handleUnknown = () => {
    if (!unknownFilter) {
      setUnknownFilter(true);
      setAliveFilter(false);
      setDeadFilter(false);
      setActiveFilter('unknown');
      getCharacters(1, searchItem, 'unknown');
      setCurrPage(1);
    } else {
      setActiveFilter('');
      setUnknownFilter(false);
      getCharacters(currPage, searchItem);
      setCurrPage(1);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
    searchItem.length > 1 
    ? getCharacters(1, event.target.value, activeFilter)
    : getCharacters(currPage, undefined, activeFilter);
    setCurrPage(1);
  };
  
  useEffect(() => {
    getCharacters();
  }, []);
  
  const charactersResults = characters.characters.results;
  const totalItems = characters.characters.info ? characters.characters.info.count : itemsPerPage;
  
  return (
    <PageWrapper>
      <CheckboxGroup>
        <Checkbox 
          checked={aliveFilter} 
          onChange={handleAlive} 
          labelText="Alive" 
          outerClassName="checkbox-wrapper" 
          innerClassName="checkbox" 
        />
        <Checkbox 
          checked={deadFilter} 
          onChange={handleDead} 
          labelText="Dead" 
          outerClassName="checkbox-wrapper" 
          innerClassName="checkbox" 
        />
        <Checkbox 
          checked={unknownFilter} 
          onChange={handleUnknown} 
          labelText="Unknown" 
          outerClassName="checkbox-wrapper" 
          innerClassName="checkbox" 
        />
      </CheckboxGroup>
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

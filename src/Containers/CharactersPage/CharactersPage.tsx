import React, { useEffect, useState } from 'react';

import { Checkbox, iconsProps, itemRender, Pages, Search } from 'components';
import { ICharactersInitialState, IGetCharactersActionType, LifeStatusConst } from 'store';
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
    padding: 8px 10px;
    margin: 20px;

    .checkbox {
      border: 1px solid ${({ theme }) => theme.colors.text};
      margin-right: 2px;
    }
  }

  .alive {
    color: ${({ theme }) => theme.colors.alive};
  }
  .dead {
    color: ${({ theme }) => theme.colors.dead};
  }
  .unknown {
    color: ${({ theme }) => theme.colors.textSecondary};
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
  const [activeFilter, setActiveFilter] = useState('');

  const handlePageChange = (page: number) => {
    getCharacters(page, searchItem, activeFilter);
    setCurrPage(page);
  };

  const handleFilter = (status: LifeStatusConst) => () => {
    status === activeFilter ? setActiveFilter('') : setActiveFilter(status); 
    getCharacters(1, searchItem, status);
  };

  const handleAlive = handleFilter(LifeStatusConst.Alive);
  const handleDead = handleFilter(LifeStatusConst.Dead);
  const handleUnknown = handleFilter(LifeStatusConst.Unknown);

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
          checked={activeFilter === LifeStatusConst.Alive} 
          onChange={handleAlive} 
          labelText="Alive" 
          outerClassName="checkbox-wrapper alive" 
          innerClassName="checkbox"
        />
        <Checkbox 
          checked={activeFilter === LifeStatusConst.Dead} 
          onChange={handleDead} 
          labelText="Dead" 
          outerClassName="checkbox-wrapper dead" 
          innerClassName="checkbox" 
        />
        <Checkbox 
          checked={activeFilter === LifeStatusConst.Unknown} 
          onChange={handleUnknown} 
          labelText="Unknown" 
          outerClassName="checkbox-wrapper unknown" 
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

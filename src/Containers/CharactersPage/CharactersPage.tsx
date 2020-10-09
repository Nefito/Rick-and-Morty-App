import React, { ReactNode, useEffect, useState } from 'react';

import { Button, iconsProps, Pages, Search } from 'components';
import { HandleGetCharactersPageExactAction, ICharactersInitialState, } from 'store';
import { styled } from 'theme';

import { CharacterCardList } from './CharacterCardList';
import { relative } from 'path';

const CharacterCardListWrapper = styled.div`
  text-align: center;
`;

interface ICharactersPage {
  characters: ICharactersInitialState;
  handleGetCharactersPageExactAction: HandleGetCharactersPageExactAction;
}

const itemRender = (current: any, type: string, element: ReactNode | undefined) => {
  if (type === 'prev') {
    return <Button type="button">Prev</Button>;
  }
  if (type === 'next') {
    return <Button type="button">Next</Button>;
  }
  return element;
};

const CharactersPage: React.FC<ICharactersPage> = (props) => {
  const { characters, handleGetCharactersPageExactAction } = props;

  const charactersResults = characters.characters.results;

  const [searchItem, setSearchItem] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    handleGetCharactersPageExactAction(page.toString());
  };

  const totalItems = characters.characters.info ? characters.characters.info.count / 2 : 10;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };

  useEffect(() => {
    handleGetCharactersPageExactAction(currentPage.toString());
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
          onChange={handlePageChange} 
          {...iconsProps}
        />
    </div>
  );
};

export default CharactersPage;

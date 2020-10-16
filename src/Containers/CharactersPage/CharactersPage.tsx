import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';

import { Button, Checkbox, iconsProps, itemRender, Pages, Search } from 'components';
import { GenderConst, ICharactersInitialState, IGetCharactersActionType, LifeStatusConst } from 'store';
import { media, styled } from 'theme';

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
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.main};
    padding: 8px 10px;
    margin: 20px;

    .checkbox {
      border: 1px solid ${({ theme }) => theme.colors.text};
      margin-right: 2px;
    }

    ${media.tabletS`
      display: block;
      margin: 0;
      text-align: left;
  `};
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

  .group {
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 8px;
    padding: 10px;

    ${media.tabletS`
      display: block;
    `};
  }

  ${media.tablet`
    text-align: center;
    display: block;
  `};
`;

const SearchWrapper = styled.form`
  text-align: center;
  margin: 10px;
  padding: 5px;

  .search {
    background: ${({ theme }) => theme.colors.main};
    font-size: 20px;
    padding: 10px 0 3px 5px;
    border-radius: 8px;
    border-width: 4px;
    margin: 0 20px;
  }
`;

const CharacterCardListWrapper = styled.div`
  text-align: center;
`;

interface ICharactersPage {
  characters: ICharactersInitialState;
  getCharacters: (page?: number, name?: string, status?: string, gender?: string) => IGetCharactersActionType;
}

const itemsPerPage = 20;

const CharactersPage: React.FC<ICharactersPage> = (props) => {
  const { characters, getCharacters } = props;

  const [currPage, setCurrPage] = useState(1);
  const [activeStatusFilter, setActiveStatusFilter] = useState('');
  const [activeGenderFilter, setActiveGenderFilter] = useState('');

  const formik = useFormik({
    initialValues: {
      searchItem: ''
    },
    onSubmit: values => {
      getCharacters(1, formik.values.searchItem, activeStatusFilter, activeGenderFilter);
    }
  });

  const handlePageChange = (page: number) => {
    getCharacters(page, formik.values.searchItem, activeStatusFilter, activeGenderFilter);
    setCurrPage(page);
  };

  const handleFilter = (status?: LifeStatusConst, gender?: GenderConst) => () => {    
    setCurrPage(1);
    if (status) {
      if (status === activeStatusFilter) {
        setActiveStatusFilter('');
        getCharacters(1, formik.values.searchItem, undefined, activeGenderFilter);
      } else {
        setActiveStatusFilter(status);
        getCharacters(1, formik.values.searchItem, status, activeGenderFilter);
      }
    } else if (gender) {
      if (gender === activeGenderFilter) {
        setActiveGenderFilter('');
        getCharacters(1, formik.values.searchItem, activeStatusFilter);
      } else {
        setActiveGenderFilter(gender);
        getCharacters(1, formik.values.searchItem, activeStatusFilter, gender);
      }
    }
  };

  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchItem(event.target.value);
  //   setCurrPage(1);
  //   searchItem.length > 1 
  //   ? getCharacters(1, event.target.value, activeStatusFilter, activeGenderFilter)
  //   : getCharacters(1, undefined, activeStatusFilter, activeGenderFilter);
  // };
  
  useEffect(() => {
    getCharacters();
  }, []);
  
  const charactersResults = characters.characters.results;
  const totalItems = characters.characters.info ? characters.characters.info.count : itemsPerPage;

  const handleAliveStatus = handleFilter(LifeStatusConst.Alive);
  const handleDeadStatus = handleFilter(LifeStatusConst.Dead);
  const handleUnknownStatus = handleFilter(LifeStatusConst.Unknown);

  const handleMaleGender = handleFilter(undefined, GenderConst.Male);
  const handleFemaleGender = handleFilter(undefined, GenderConst.Female);
  const handleGenderlessGender = handleFilter(undefined, GenderConst.Genderless);
  const handleUnknownGender = handleFilter(undefined, GenderConst.Unknown);
  
  return (
    <PageWrapper>
      <CheckboxGroup>
        <span className="group">Status: 
          <Checkbox 
            checked={activeStatusFilter === LifeStatusConst.Alive} 
            onChange={handleAliveStatus} 
            labelText="Alive" 
            outerClassName="checkbox-wrapper alive" 
            innerClassName="checkbox"
          />
          <Checkbox 
            checked={activeStatusFilter === LifeStatusConst.Dead} 
            onChange={handleDeadStatus} 
            labelText="Dead" 
            outerClassName="checkbox-wrapper dead" 
            innerClassName="checkbox" 
          />
          <Checkbox 
            checked={activeStatusFilter === LifeStatusConst.Unknown} 
            onChange={handleUnknownStatus} 
            labelText="Unknown" 
            outerClassName="checkbox-wrapper unknown" 
            innerClassName="checkbox" 
          />
        </span>
      </CheckboxGroup>
      <CheckboxGroup >
        <span className="group">Gender: 
          <Checkbox 
            checked={activeGenderFilter === GenderConst.Male} 
            onChange={handleMaleGender} 
            labelText="Male" 
            outerClassName="checkbox-wrapper" 
            innerClassName="checkbox"
          />
          <Checkbox 
            checked={activeGenderFilter === GenderConst.Female} 
            onChange={handleFemaleGender} 
            labelText="Female" 
            outerClassName="checkbox-wrapper" 
            innerClassName="checkbox"
          />
          <Checkbox 
            checked={activeGenderFilter === GenderConst.Genderless} 
            onChange={handleGenderlessGender} 
            labelText="Genderless" 
            outerClassName="checkbox-wrapper" 
            innerClassName="checkbox"
          />
          <Checkbox 
            checked={activeGenderFilter === GenderConst.Unknown} 
            onChange={handleUnknownGender} 
            labelText="Unknown" 
            outerClassName="checkbox-wrapper" 
            innerClassName="checkbox"
          />
        </span>
      </CheckboxGroup>
      <SearchWrapper onSubmit={formik.handleSubmit}>
        <Search 
          className="search" 
          placeholder="Search characters.." 
          name="searchItem" 
          handleChange={formik.handleChange} 
        />
        <Button type="submit">Submit</Button> 
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

import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';

import { Button, Checkbox, iconsProps, itemRender, Pages, Search } from 'components';
import { IEpisodesInitialState, IGetEpisodesActionType  } from 'store';
import { media, styled } from 'theme';

import { EpisodeCardList } from './EpisodeCardList';

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

const EpisodeCardListWrapper = styled.div`
  text-align: center;
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

interface IEpisodesPage {
  episodes: IEpisodesInitialState;
  getEpisodes: (page?: number, name?: string, season?: number) => IGetEpisodesActionType;
}

const itemsPerPage = 20;

const EpisodesPage: React.FC<IEpisodesPage> = (props) => {
  const { episodes, getEpisodes } = props;

  const [currPage, setCurrPage] = useState(1);
  const [activeSeasonFilter, setActiveSeasonFilter] = useState(0);

  const formik = useFormik({
    initialValues: {
      searchItem: ''
    },
    onSubmit: values => {
      getEpisodes(1, formik.values.searchItem, activeSeasonFilter);
    }
  });

  const handlePageChange = (page: number) => {
    getEpisodes(page, formik.values.searchItem);
    setCurrPage(page);
  };

  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchItem(event.target.value);
  //   searchItem.length > 1 
  //   ? getEpisodes(1, event.target.value, activeSeasonFilter) 
  //   : getEpisodes(1, undefined, activeSeasonFilter);
  // };

  const handleFilter = (season: number) => () => {
    setCurrPage(1);
    
    if (season === activeSeasonFilter) {
      setActiveSeasonFilter(0);
      getEpisodes(1, formik.values.searchItem);
    } else {
      setActiveSeasonFilter(season);
      getEpisodes(1, formik.values.searchItem, season);
    }
  }; 

  useEffect(() => {
    getEpisodes();
  }, []);

  const episodesResults = episodes.episodes.results;
  const totalItems = episodes.episodes.info ? episodes.episodes.info.count : itemsPerPage;

  const handleSeason1 = handleFilter(1);
  const handleSeason2 = handleFilter(2);
  const handleSeason3 = handleFilter(3);
  const handleSeason4 = handleFilter(4);

  return (
    <PageWrapper>
      <CheckboxGroup >
        <span className="group"> 
          <Checkbox 
            checked={activeSeasonFilter === 1} 
            onChange={handleSeason1} 
            labelText="Season 1" 
            outerClassName="checkbox-wrapper" 
            innerClassName="checkbox"
          />
          <Checkbox 
            checked={activeSeasonFilter === 2} 
            onChange={handleSeason2} 
            labelText="Season 2" 
            outerClassName="checkbox-wrapper" 
            innerClassName="checkbox"
          />
          <Checkbox 
            checked={activeSeasonFilter === 3} 
            onChange={handleSeason3} 
            labelText="Season 3" 
            outerClassName="checkbox-wrapper" 
            innerClassName="checkbox"
          />
          <Checkbox 
            checked={activeSeasonFilter === 4} 
            onChange={handleSeason4} 
            labelText="Season 4" 
            outerClassName="checkbox-wrapper" 
            innerClassName="checkbox"
          />
        </span>
      </CheckboxGroup>
      <SearchWrapper onSubmit={formik.handleSubmit}>
        <Search 
          className="search" 
          placeholder="Episode title.." 
          name="searchItem" 
          handleChange={formik.handleChange} 
        />
        <Button type="submit">Submit</Button> 
      </SearchWrapper>
      <EpisodeCardListWrapper>
        <EpisodeCardList episodes={episodesResults} />
      </EpisodeCardListWrapper>
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

export default EpisodesPage;

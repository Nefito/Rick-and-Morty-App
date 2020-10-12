import React, { useEffect, useState } from 'react';

import { iconsProps, itemRender, Pages, PageWrapper, Search } from 'components';
import { IEpisodesInitialState, IGetEpisodesActionType  } from 'store';
import { styled } from 'theme';

import { EpisodeCardList } from './EpisodeCardList';

const EpisodeCardListWrapper = styled.div`
  text-align: center;
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

interface IEpisodesPage {
  episodes: IEpisodesInitialState;
  getEpisodes: (page?: number) => IGetEpisodesActionType;
}

const itemsPerPage = 20;

const EpisodesPage: React.FC<IEpisodesPage> = (props) => {
  const { episodes, getEpisodes } = props;

  const [searchItem, setSearchItem] = useState('');

  const handlePageChange = (page: number) => {
    getEpisodes(page);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };

  const episodesResults = episodes.episodes.results;
  const totalItems = episodes.episodes.info ? episodes.episodes.info.count : itemsPerPage;

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <PageWrapper>
      <SearchWrapper>
        <Search className="search" placeholder="Search episodes.." handleChange={handleSearch} /> 
      </SearchWrapper>
      <EpisodeCardListWrapper>
        <EpisodeCardList episodes={episodesResults.filter(episode => 
          episode.name.toLowerCase().includes(searchItem.toLowerCase()))} />
      </EpisodeCardListWrapper>
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

export default EpisodesPage;

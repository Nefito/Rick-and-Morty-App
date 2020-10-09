import React, { useEffect, useState } from 'react';

import { iconsProps, itemRender, Pages, Search } from 'components';
import { IEpisodesInitialState, IGetEpisodesActionType  } from 'store';
import { styled } from 'theme';

import { EpisodeCardList } from './EpisodeCardList';

const EpisodeCardListWrapper = styled.div`
  text-align: center;
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

  const episodesResults = episodes.episodes.results;
  const totalItems = episodes.episodes.info ? episodes.episodes.info.count : itemsPerPage;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Search placeholder="Search episodes.." handleChange={handleSearch} /> 
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
    </div>
  );
};

export default EpisodesPage;

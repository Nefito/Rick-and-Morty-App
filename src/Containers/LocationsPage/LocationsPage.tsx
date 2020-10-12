import React, { useEffect, useState } from 'react';

import { iconsProps, itemRender, Pages, Search } from 'components';
import { IGetLocationsActionType, ILocationsInitialState  } from 'store';
import { styled } from 'theme';

import { LocationCardList } from './LocationCardList';

const PageWrapper = styled.div`
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
`;

const LocationCardListWrapper = styled.div`
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

interface ILocationsPage {
  locations: ILocationsInitialState;
  getLocations: (page?: number, name?: string) => IGetLocationsActionType;
}

const itemsPerPage = 20;

const LocationsPage: React.FC<ILocationsPage> = (props) => {
  const { locations, getLocations } = props;

  const [searchItem, setSearchItem] = useState('');
  const [currPage, setCurrPage] = useState(1);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
    searchItem.length > 1 ? getLocations(currPage, event.target.value) : getLocations(currPage);
  };

  const handlePageChange = (page: number) => {
    getLocations(page, searchItem);
    setCurrPage(page);
  };

  useEffect(() => { 
    getLocations();
  }, []);

  const locationsResults = locations.locations.results;
  const totalItems = locations.locations.info ? locations.locations.info.count : itemsPerPage;

  return (
    <PageWrapper>
      <SearchWrapper>
        <Search className="search" placeholder="Search locations.." handleChange={handleSearch} /> 
      </SearchWrapper>
      <LocationCardListWrapper>
        <LocationCardList locations={locationsResults} />
      </LocationCardListWrapper>
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

export default LocationsPage;

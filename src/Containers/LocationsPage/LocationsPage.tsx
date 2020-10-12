import React, { useEffect, useState } from 'react';

import { iconsProps, itemRender, Pages, PageWrapper, Search } from 'components';
import { IGetLocationsActionType, ILocationsInitialState  } from 'store';
import { styled } from 'theme';

import { LocationCardList } from './LocationCardList';

const LocationCardListWrapper = styled.div`
  text-align: center;
`;

interface ILocationsPage {
  locations: ILocationsInitialState;
  getLocations: (page?: number) => IGetLocationsActionType;
}

const itemsPerPage = 20;

const LocationsPage: React.FC<ILocationsPage> = (props) => {
  const { locations, getLocations } = props;

  const [searchItem, setSearchItem] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };

  const handlePageChange = (page: number) => {
    getLocations(page);
  };

  useEffect(() => { 
    getLocations();
  }, []);

  const locationsResults = locations.locations.results;
  const totalItems = locations.locations.info ? locations.locations.info.count : itemsPerPage;

  return (
    <PageWrapper>
      <Search placeholder="Search locations.." handleChange={handleSearch} /> 
      <LocationCardListWrapper>
        <LocationCardList locations={locationsResults.filter(location => 
          location.name.toLowerCase().includes(searchItem.toLowerCase()))} />
      </LocationCardListWrapper>
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

export default LocationsPage;

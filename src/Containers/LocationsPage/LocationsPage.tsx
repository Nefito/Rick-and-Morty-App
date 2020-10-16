import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';

import { Button, iconsProps, itemRender, Pages, Search } from 'components';
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
    margin: 0 50px;
  }
`;

interface ILocationsPage {
  locations: ILocationsInitialState;
  getLocations: (page?: number, name?: string, type?: string, dimension?: string) => IGetLocationsActionType;
}

const itemsPerPage = 20;

const LocationsPage: React.FC<ILocationsPage> = (props) => {
  const { locations, getLocations } = props;

  const formik = useFormik({
    initialValues: {
      activeNameFilter: '',
      activeTypeFilter: '',
      activeDimFilter: ''
    },
    onSubmit: values => {
      getLocations(1, formik.values.activeNameFilter, formik.values.activeTypeFilter, formik.values.activeDimFilter);
    }
  });

  const [currPage, setCurrPage] = useState(1);
  // const [activeNameFilter, setActiveNameFilter] = useState('');
  // const [activeTypeFilter, setActiveTypeFilter] = useState('');
  // const [activeDimFilter, setActiveDimFilter] = useState('');

  // const handleNameFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setActiveNameFilter(event.target.value);
  //   setCurrPage(1);
  //   activeNameFilter.length > 1
  //     ? getLocations(1, event.target.value, activeTypeFilter, activeDimFilter)
  //     : getLocations(1, undefined, activeTypeFilter, activeDimFilter);
  // };

  // const handleTypeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setActiveTypeFilter(event.target.value);
  //   setCurrPage(1);
  //   activeTypeFilter.length > 1
  //     ? getLocations(1, activeNameFilter, event.target.value, activeDimFilter)
  //     : getLocations(1, activeNameFilter, undefined, activeDimFilter);
  // };

  // const handleDimFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setActiveDimFilter(event.target.value);
  //   setCurrPage(1);
  //   activeDimFilter.length > 1
  //     ? getLocations(1, activeNameFilter, activeTypeFilter, event.target.value)
  //     : getLocations(1, activeNameFilter, activeTypeFilter);
  // };

  const handlePageChange = (page: number) => {
    getLocations(page, formik.values.activeNameFilter, formik.values.activeTypeFilter, formik.values.activeDimFilter);
    setCurrPage(page);
  };

  useEffect(() => { 
    getLocations();
  }, []);

  const locationsResults = locations.locations.results;
  const totalItems = locations.locations.info ? locations.locations.info.count : itemsPerPage;

  return (
    <PageWrapper>
      <SearchWrapper onSubmit={formik.handleSubmit}>
        <Search 
          className="search" 
          placeholder="Location name.."
          name="activeNameFilter" 
          handleChange={formik.handleChange} 
        /> 
        <Search 
          className="search" 
          placeholder="Location type.." 
          name="activeTypeFilter" 
          handleChange={formik.handleChange} 
        /> 
        <Search 
          className="search" 
          placeholder="Dimension.." 
          name="activeDimFilter" 
          handleChange={formik.handleChange} 
        />
        <Button type="submit">Submit</Button> 
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

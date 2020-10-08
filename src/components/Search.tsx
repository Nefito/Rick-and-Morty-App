import React from 'react';

import { Input } from 'components';
import { styled } from 'theme';

const SearchWrapper = styled(Input)`
  position: absolute;
  top: 5px;
  right: 30px;
`;

interface ISearch {
  handleChange: any;
  placeholder: string;
}
export const Search: React.FC<ISearch> = ({ handleChange, placeholder }) => {
  return (
    <SearchWrapper type="search" name="search" id="search" onChange={handleChange} placeholder={placeholder} />
  );
};

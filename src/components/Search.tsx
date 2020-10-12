import React from 'react';

import { Input } from 'components';

// const SearchWrapper = styled(Input)`
//   position: absolute;
//   top: 5px;
//   right: 30px;
// `;

interface ISearch {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}
export const Search: React.FC<ISearch> = ({ handleChange, placeholder, className }) => {
  return (
    <Input 
      type="search" 
      name="search" 
      id="search" 
      onChange={handleChange} 
      placeholder={placeholder} 
      className={className} 
    />
  );
};

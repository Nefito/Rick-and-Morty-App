import React from 'react';

import { Input } from 'components';

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

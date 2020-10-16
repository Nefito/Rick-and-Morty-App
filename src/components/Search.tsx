import React from 'react';

import { Input } from 'components';

interface ISearch {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  className?: string;
}
export const Search: React.FC<ISearch> = ({ handleChange, placeholder, className, name }) => {
  return (
    <Input 
      type="search" 
      name={name} 
      id={name}
      onChange={handleChange} 
      placeholder={placeholder} 
      className={className} 
    />
  );
};

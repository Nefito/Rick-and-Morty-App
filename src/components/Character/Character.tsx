import React from 'react';
import { useQuery } from 'react-query';

import { Modal } from 'components';

import ApiClientService from 'services/ApiClient';

interface ICharacter {
  url: string;
  divClass: string;
  imgClass: string;
}

export const Character: React.FC<ICharacter> = ({ url, divClass, imgClass }) => {

  const getCharacter = new ApiClientService(url).get('/');

  const { data, status } = useQuery(url, () => getCharacter);

  if (status === 'loading') {
    return (
      <span>Loading...</span>
    );
  }
  if (status === 'error') {
    return (
      <span>Some error has ocurred</span>
    );
  }
  return (
    <div className={divClass}>
      <img className={imgClass} src={data.image} alt={data.name} />
      <Modal url={data.url} />
   </div>
  );
};

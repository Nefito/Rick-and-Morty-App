import React from 'react';
import { useQuery } from 'react-query';

import { Modal } from 'components';
import { styled } from 'theme';

import ApiClientService from 'services/ApiClient';

const CharacterWrapper = styled.div`

  display: inline;
  position: relative;
  padding: 0;
  margin: 10px;

  .character-img {
    width: 150px;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.colors.text};

    &:hover {
      border-color: ${({ theme }) => theme.colors.secondary}
    }
  }

  .link-no-style {
    position: absolute;
    display: block;
    bottom: 100%;
    left: 2px;
    right: 2px;
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.text};
    width: 97%;
    border: none;
    
    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

interface ICharacter {
  url: string;
  divClass: string;
  imgClass: string;
}

export const Character: React.FC<ICharacter> = ({ url, divClass, imgClass }) => {

  const getCharacter = new ApiClientService(url).get('/');

  const { data, status } = useQuery(url, () => getCharacter);

  if (status === 'loading') {
    return <span>Loading...</span>;
  }
  if (status === 'error') {
    return <span>Some error has ocurred</span>;
  }
  return (
    <CharacterWrapper>
      <img className="character-img" src={data.image} alt={data.name} />
      <Modal url={data.url} />
   </CharacterWrapper>
  );
};

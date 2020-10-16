import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { errorOrLoadingStatusMsg } from 'commonUtil';
import { CharacterCardModal, Modal } from 'components';
import { apiClientService } from 'services';
import { media, styled } from 'theme';

const CharacterWrapper = styled.div`
  display: inline;
  position: relative;

  .character-img {
    width: 150px;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.colors.text};

    &:hover {
      border-color: ${({ theme }) => theme.colors.secondary}
    }

    ${media.tablet`
      width: 200px;
    `};
  }

  .link-no-style {
    position: absolute;
    display: block;
    bottom: 100%;
    left: 2px;
    
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.text};
    width: 98%;
    border: none;
    
    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }

    ${media.tablet`
      font-weight: bold;
      font-size: 20px;
    `};
  }
`;

interface ICharacter {
  url: string;
  className?: string;
}

export const Character: React.FC<ICharacter> = ({ url, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const characterId =  url.split(/(\/)/g).slice(-1).pop();
  
  const getCharacter = apiClientService.get(`character/${characterId}`);

  const { data, status } = useQuery(url, () => getCharacter);

  if (!errorOrLoadingStatusMsg(status)) {
    return (
      <CharacterWrapper className={className}>
        <img className="character-img" src={data.image} alt={data.name} />
        <button onClick={toggleModal} className="link-no-style">{data.name}</button>
        <Modal modalContent={<CharacterCardModal url={data.url} />} isOpen={isModalOpen} toggleModal={toggleModal}  />
      </CharacterWrapper>
    );
  }
  return errorOrLoadingStatusMsg(status);
};

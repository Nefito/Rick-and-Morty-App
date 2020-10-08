import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import ApiClientService from 'services/ApiClient';
import { CharacterCard } from './Card';

ReactModal.setAppElement('#root');

const StyledModal = styled(ReactModal)`
  position: relative;
  
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
`;

interface IModal {
  url: string;
}

export const Modal: React.FC<IModal> = (props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { url } = props;

  const api = new ApiClientService(url);
  const getCharacter = api.get('/'); 

  const { data, status } = useQuery(url, () => getCharacter);

  const characterName = status === 'loading' ? 'Loading...' : status === 'error' ? 'error' : data.name;

  return (
    <>
      <button onClick={toggleModal} className="link-no-style">{characterName}</button>
      <StyledModal isOpen={isModalOpen} onRequestClose={toggleModal} >
        <div className="modal-content">
          { status === 'loading' ? <p>Loading...</p> :
          status === 'error' ? <p>Error :(</p> :
          <CharacterCard character={data} /> }
        </div>
      </StyledModal>
    </>
  );
};

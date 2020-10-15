import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useQuery } from 'react-query';

import { errorOrLoadingStatusMsg, urlToLink } from 'commonUtil';
import { apiClientService } from 'services';
import { styled } from 'theme';

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

export const Modal: React.FC<IModal> = ({ url }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const getModalContent = apiClientService.get(urlToLink(url, '', 4));
  const { data, status } = useQuery(url, () => getModalContent);

  const buttonTitle = errorOrLoadingStatusMsg(status) ? 
                      errorOrLoadingStatusMsg(status) 
                      : data.name;

  return (
    <>
      <button onClick={toggleModal} className="link-no-style">{buttonTitle}</button>
      <StyledModal isOpen={isModalOpen} onRequestClose={toggleModal} >
        <div className="modal-content">
          { errorOrLoadingStatusMsg(status) ? errorOrLoadingStatusMsg(status)
            : <CharacterCard character={data} /> }
        </div>
      </StyledModal>
    </>
  );
};

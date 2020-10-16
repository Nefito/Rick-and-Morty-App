import React from 'react';
import ReactModal from 'react-modal';

import { styled } from 'theme';

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
  isOpen: boolean;
  toggleModal: () => void;
  modalContent: React.ReactNode;
}

export const Modal: React.FC<IModal> = ({ modalContent, isOpen, toggleModal }) => {
  return (
    <StyledModal isOpen={isOpen} onRequestClose={toggleModal} >
      <div className="modal-content">
        {modalContent}
      </div>
    </StyledModal>
  );
};

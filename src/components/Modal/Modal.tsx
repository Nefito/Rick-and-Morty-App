import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { Button, CharacterCard } from 'components';

ReactModal.setAppElement('#root');

interface IModal {
  resident: string;
}

const Modal: React.FC<IModal> = (props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { resident } = props;

  return (
    <>
      <button onClick={toggleModal} className="link-no-style">{resident}</button>
      <ReactModal isOpen={isModalOpen} onRequestClose={toggleModal} >
        <Button onClick={() => toggleModal()} btnText="Close" />
      </ReactModal>
    </>
  );
};

export default Modal;

import Modal from 'react-modal';
import React, { useState } from 'react';
import 

const ModalExample = () => {
  const [modalIsOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>모달열기</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>모달 제목</h2>
        <p>모달 내용</p>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </div>
  );
};

export default ModalExample;

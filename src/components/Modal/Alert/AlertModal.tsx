import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Modal from 'react-modal';
import styles from '../Alert/AlertModal.module.css';

const AlertModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <>
      <Modal
        className={styles.modalContent}
        overlayClassName={styles.overlay}
        isOpen
        onRequestClose={closeModal}
      >
        <div className={styles['modal-header']}>
          <button onClick={closeModal} className={styles['close-button']}>
            ✖
          </button>
        </div>
        <div className={styles['modal-body']}>
          모든 값을 올바르게 입력해주세요
        </div>
        <button className={styles['check-button']}>확인</button>
      </Modal>
    </>
  );
};

export default AlertModal;

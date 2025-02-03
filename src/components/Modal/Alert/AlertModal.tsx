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
        <div className={styles['modal-header']} />
        <div className={styles['modal-body']}>
          <div className={styles['description']}>
            모든 값을 올바르게 입력 해 주세요
          </div>
        </div>
        <div className={styles['modal-footer']}>
          <button onClick={closeModal} className={styles['close-button']}>
            닫기
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AlertModal;

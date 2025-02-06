import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Modal from 'react-modal';
import styles from '../User/UserModal.module.css';
import logoutImage from '~/assets/images/logoutImage.png';

interface UserModalProps {
  closeModal: () => void;
  handleLogout: () => void;
}

const UserModal = ({ closeModal, handleLogout }: UserModalProps) => {
  return (
    <>
      <Modal
        className={styles.modalContent}
        overlayClassName={styles.overlay}
        isOpen
        onRequestClose={closeModal}
      >
        <div className={styles['modal-header']}>
          <button onClick={closeModal} className={styles['setting-button']}>
            ⚙️
          </button>
        </div>
        <div className={styles['modal-body']}>
          <div className={styles['first-body']}>
            <div className={styles['profile']} />
            <div className={styles['user-info']}>
              <div className={styles['semester']}>CRA 25-1기</div>
              <div className={styles['name']}>김한동</div>
              <div className={styles['student-number']}>22500XXX</div>
            </div>
          </div>
          <div className={styles['hanmadi']}>" 나의 한마디를 입력하세요. "</div>
        </div>
        <div className={styles['extra-info']}>
          <div>GitHub 주소 | </div>
          <div> 기술 스택 |</div>
          <div className={styles['line']} />
        </div>
        <a className={styles['logout']} onClick={handleLogout}>
          <img src={logoutImage} className={styles['logout-image']} />
          <div>로그아웃</div>
        </a>
      </Modal>
    </>
  );
};

export default UserModal;

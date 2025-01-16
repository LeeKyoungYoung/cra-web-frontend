import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styles from '../Alert/AlerModal.module.css';

interface AlertModalProps {
  closeModal: () => void;
}

function AlertModal({ closeModal }: AlertModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // 모달 열렸을 때 스크롤 방지
    } else {
      document.body.style.overflow = ''; // 모달 닫혔을 때 스크롤 허용
    }
  }, [isOpen]);

  // 모달 열릴 때 애니메이션 적용
  const afterOpenHandler = () => {
    document
      .querySelector(`.${styles.modalContent}`)
      ?.classList.add(styles.modalOpen);
  };

  // 모달 닫히기 직전에 애니메이션 시작
  const requestCloseHandler = () => {
    document
      .querySelector(`.${styles.modalContent}`)
      ?.classList.remove(styles.modalOpen);
    setIsOpen(false); // 모달 닫기
    closeModal(); // 외부 closeModal 호출
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={requestCloseHandler} // 모달 닫을 때 실행
      className={styles.modalContent}
      onAfterOpen={afterOpenHandler} // 모달이 열릴 때 실행
    >
      <h2>⚠️</h2>
      <p>모든 값을 올바르게 입력해주세요.</p>
      <button onClick={requestCloseHandler}>닫기</button>
    </Modal>
  );
}

export default AlertModal;

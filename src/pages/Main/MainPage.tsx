import React from 'react';
import styles from './MainPage.module.css';

export default function MainPage() {
  return (
    <div className={styles['main-page']}>
      <div className={styles['section']}>
        <p>동아리 활동 사진 갤러리</p>
        <p>인스타그램 (cra_handong)에 게시된 사진</p>
      </div>
      <div className={styles['section']}>
        <p>동아리 공지사항</p>
      </div>
      <div className={styles['section']}>
        <p>학술 게시판 내용</p>
      </div>
    </div>
  );
}

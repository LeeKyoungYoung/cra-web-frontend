import React from 'react';
import styles from './MainPage.module.css';
import MainBoardList from './MainBoardList';
import { CATEGORY } from '~/constants/category';

export default function MainPage() {
  return (
    <div className={styles['main-page']}>
      <div className={styles['activity-section']}>
        <p>동아리 활동 사진</p>
        <div className={styles['activity-block']}>
          <div className={styles['activity-picture']}></div>
        </div>
        <div className={styles['activity-block']}>
          <div className={styles['activity-picture']}></div>
        </div>
        <div className={styles['activity-block']}>
          <div className={styles['activity-picture']}></div>
        </div>
        <div className={styles['activity-block']}>
          <div className={styles['activity-picture']}></div>
        </div>
        <div className={styles['activity-block']}>
          <div className={styles['activity-picture']}></div>
        </div>
        <div className={styles['activity-block']}>
          <div className={styles['activity-picture']}></div>
        </div>
      </div>
      <div className={styles['notice-section']}>
        <p>동아리 공지사항</p>
        <MainBoardList category={CATEGORY.NOTICE} />
      </div>
      <div className={styles['activity-section']}>
        <p>학술 게시판 내용</p>
      </div>
    </div>
  );
}

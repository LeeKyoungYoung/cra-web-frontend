import { Link } from 'react-router-dom';
import { CATEGORY } from '~/constants/category.ts';
import MainBoardList from './MainBoardList.tsx';
import CRANG from '~/assets/images/Status_Crang.png';
import styles from './MainPage.module.css';

export default function MainPage() {
  return (
    <div className={styles['main-page']}>
      <div className={styles['activity-section']}>
        <div className={styles['activity-block']}>
          <img src={CRANG} />
        </div>
      </div>
      <div className={styles['notice-section']}>
        <p>
          <Link to="/notice" className={styles.link}>
            동아리 공지사항
          </Link>
        </p>
        <MainBoardList category={CATEGORY.NOTICE} />
      </div>
      <div className={styles['notice-section']}>
        <p>
          <Link to="/academic" className={styles.link}>
            학술 게시판 내용
          </Link>
        </p>
        <MainBoardList category={CATEGORY.ACADEMIC} />
      </div>
    </div>
  );
}

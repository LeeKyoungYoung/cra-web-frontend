import { Link } from 'react-router-dom';
import HeaderIntro from '~/components/Header/Intro-Header/HeaderIntro';
import ProjectIntro from './Project/ProjectIntro';
import styles from './IntroPage.module.css';

export default function IntroPage() {
  return (
    <div className={styles['intro-container']}>
      <div className={styles['intro-main']}>
        <HeaderIntro />
        <div className={styles['intro-section']}>
          <div className={styles['banner']}>
            <div>LIVE YOUR</div>
            <div>PASSION</div>
            <div>CODE YOUR</div>
            <div>DREAMS</div>
          </div>
          <img className={styles['character']} />
          <Link to="/recruit" className={styles['recruit-btn']}>
            <p>2025-1 CRA RECRUITMENT</p>
          </Link>
        </div>
      </div>
      <div className={styles['intro-section']}>
        <p>동아리 소개</p>
      </div>
    </div>
  );
}

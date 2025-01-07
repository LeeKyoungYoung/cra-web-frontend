import { Link } from 'react-router-dom';
import HeaderIntro from '~/components/Header/Intro-Header/HeaderIntro';
import Vector from '~/assets/images/Arrow-Vector.png';
import styles from './IntroPage.module.css';

export default function IntroPage() {
  return (
    <div className={styles['container']}>
      <div className={styles['main']}>
        <HeaderIntro />
        <div className={styles['section']}>
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
          <div className={styles['vector']}>
            <img src={Vector} />
            <img src={Vector} />
          </div>
        </div>
      </div>
      <div className={styles['cra']}>
        <div className={styles['description']}>
          <span>C</span>
          <p>omputer </p>
          <span>R</span>
          <p>esearch </p>
          <span>A</span>
          <p>ssoication</p>
        </div>
      </div>
      <div className={styles['club']}>
        <p>동아리 소개</p>
      </div>
      <div className={styles['project']}>
        <p>프로젝트</p>
      </div>
    </div>
  );
}

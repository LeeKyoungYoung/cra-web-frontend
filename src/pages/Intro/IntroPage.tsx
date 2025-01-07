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
        <div className={styles['title']}>
          <span>C</span>
          <p>omputer</p>
          <span id={styles['cap-letter']}>R</span>
          <p>esearch</p>
          <span id={styles['cap-letter']}>A</span>
          <p>ssoication</p>
        </div>
        <div className={styles['description']}>
          <p>CRA는 한동대학교 전산 교육과정에 기초하여</p>
          <p>
            한 분야에 국한되지 않는 신기술을 공부하고 습득한 지식과 기술을 통해
          </p>
          <p>
            <span>‘배워서 남주자’</span>를 실천하는 동아리입니다.
          </p>
        </div>
        <div className={styles['content']}>
          <div className={styles['card']}>
            <p id={styles['card-title']}>CRA가 창립한지</p>
            <p id={styles['card-content']}>29년</p>
          </div>
          <div className={styles['card']}>
            <p id={styles['card-title']}>출시 서비스</p>
            <p id={styles['card-content']}>?개</p>
          </div>
          <div className={styles['card']}>
            <p id={styles['card-title']}>선배들과 함께하는</p>
            <p id={styles['card-content2']}>정기적인</p>
            <p id={styles['card-content2']}>교류활동</p>
          </div>
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

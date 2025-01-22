import { Link } from 'react-router-dom';
import HeaderIntro from '~/components/Header/Intro-Header/HeaderIntro';
import Vector from '~/assets/images/Vector/Arrow-Vector.png';
import styles from './IntroPage.module.css';
import EmblaCarousel from '~/components/Carousel/EmblaCarousel';

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
        <div className={styles['club-container']}>
          <div className={styles['club-card']}>
            <div className={styles['club-title']}>
              <p>탄탄하고 끈끈한</p>
              <p>네트워크</p>
            </div>
            <div className={styles['club-content']}>
              <div className={styles['club-content1']}>
                <p>현재 재학생 약 50명, 졸업생 약 200명으로 구성</p>
                <p>되어 있으며, 매년 재학생과 졸업생 모두가 모이</p>
                <p>는 ‘큰모임’이 진행됩니다.</p>
              </div>
              <div className={styles['club-content1']}>
                <p>재학생들은 대기업, 공기업, 스타트업, 실리콘 밸</p>
                <p>리, 대학원 등 다양한 직군에 계시는 졸업생 선배</p>
                <p>님들로부터 많은 도움을 받을 수 있습니다.</p>
              </div>
            </div>
          </div>
          <div className={styles['club-image']}>
            <p>이미지1</p>
          </div>
        </div>

        <div className={styles['club-container']}>
          <div className={styles['club-image']}>
            <p>이미지2</p>
          </div>
          <div className={styles['club-card1']}>
            <div className={styles['club-title']}>
              <p>함께 성장하기에</p>
              <p>최고로 좋은 환경</p>
            </div>
            <div className={styles['club-content']}>
              <div className={styles['club-content1']}>
                <p>선의의 경쟁을 통해 좋은 자극을 받을 수 있는 동</p>
                <p>료들이 기다리고 있습니다. 24시간 이용 가능한</p>
                <p>동방에서 모르는 것이 있으면 서로 물어보거나 토</p>
                <p>론을 하기도 합니다.</p>
              </div>
              <div className={styles['club-content1']}>
                <p>단순히 혼자서 공부하는 것이 아닌, ‘질문하고 토</p>
                <p>론하라!’ 하브루타 공부법으로 더욱 심도있게 탐</p>
                <p>구하고 토론합니다. </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['club-container']}>
          <div className={styles['club-card']}>
            <div className={styles['club-title']}>
              <p>리얼로다가!</p>
              <p>개발을 합니다</p>
            </div>
            <div className={styles['club-content']}>
              <div className={styles['club-content1']}>
                <p>신입회원은 방학 프로젝트를 진행하게 됩니다. 선</p>
                <p>배의 가이드와 함께 지식을 공부하고 실제로 프로</p>
                <p>젝트를 기획하며 개발합니다.</p>
              </div>
              <div className={styles['club-content1']}>
                <p>더 나아가, 실제로 개발의 결과물을 바탕으로 서</p>
                <p>비스를 출시할 수도 있습니다. 현재 서비스 중인</p>
                <p>프로젝트에 투입되어 서비스 유지보수 및 유저와</p>
                <p>소통하는 방법을 학부생으로서 경험하게 됩니다.</p>
              </div>
            </div>
          </div>
          <div className={styles['club-image']}>
            <p>이미지3</p>
          </div>
        </div>
      </div>

      <div className={styles['project']}>
        <p>프로젝트 소개</p>
        <EmblaCarousel />
      </div>
    </div>
  );
}

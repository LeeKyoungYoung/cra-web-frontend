import { Link } from 'react-router-dom';
import HeaderIntro from '~/components/Header/Intro-Header/HeaderIntro';
import styles from './RecruitPage.module.css';
import Vector from '~/assets/images/Vector/Arrow-Vector.png';
import Vector2 from '~/assets/images/Vector/Arrow-Vector2.png';

export default function RecruitPage() {
  return (
    <div className={styles['recruit-container']}>
      <div className={styles['recruit-main']}>
        <HeaderIntro />
        <hr />
        <div className={styles['recruit-banner']}>
          <p id={styles['title']}>2025 CRA</p>
          <p id={styles['title']}>RECRUITMENT</p>
          <p id={styles['content']}>
            CRA는 함께 성장 할 25-1 기수 동아리원을 모집합니다.
          </p>
          <div className={styles['vector']}>
            <img src={Vector2} />
            <img src={Vector} />
          </div>
        </div>
      </div>

      <div className={styles['recruit-talent']}>
        <h1>이런 사람과 함께 하고 싶어요</h1>
        <div className={styles['recruit-talentDetail']}>
          <div>
            <span className={styles['number']}>01</span>
            <p>
              다른 사람과 협력하며 공동의 목표를 <br />
              이루고 서로 배우고 발전하며{' '}
              <span style={{ color: '#2CB4DB' }}>함께 성장</span>하고 싶은 사람
            </p>
          </div>
          <div>
            <span className={styles['number']}>02</span>
            <p>
              어떤 문제든 두려움 없이 극복하려는 의지를 가지고
              <br />
              새로운 기회를 탐구하는 용기와{' '}
              <span style={{ color: '#2CB4DB' }}>도전 의식</span>을 지닌 사람
            </p>
          </div>
          <div>
            <span className={styles['number']}>03</span>
            <p>
              익숙하지 않은 새로운 지식을 접할 때도 적극적으로 받아들이고
              <br />
              실수를 통해 성장하며 자신의 능력을 확장하려고{' '}
              <span style={{ color: '#2CB4DB' }}>노력</span>하는 사람
            </p>
          </div>
          <div>
            <span className={styles['number']}>04</span>
            <p>
              다양한 경험과 지식을 습득하며{' '}
              <span style={{ color: '#2CB4DB' }}>스스로 성장</span>하는 동시에,
              <br />
              자신이 얻은 것들을 주변 사람들에게 아낌없이{' '}
              <span style={{ color: '#2CB4DB' }}>나눠줄 수 있는</span> 사람
            </p>
          </div>
        </div>
      </div>

      <div className={styles['recruit-content']}>
        <h2>모집 개요</h2>
        <div className={styles['recruit-contentDetail']}>
          <div className={styles['content-box']}>
            <h3>핵심 인재상</h3>
            <p>컴퓨터 분야의 최신 기술을 공부 </p>
            <p>및 연구하고 싶은 누구나</p>
          </div>
          <div className={styles['content-box']}>
            <h3>지원 자격</h3>
            <p>신입 하계 방학 프로젝트에 참</p>
            <p>여 가능하신 분</p>
            <br />
            <p>매 학기 개강/종강 총회에 참여</p>
            <p>가능하신 분</p>
          </div>
          <div className={styles['content-box']}>
            <h3>지원 방법</h3>
            <p>1차 서류</p>
            <p style={{ color: 'gray' }}>리크루팅 폼에서 지원서 작성</p>
            <br />
            <p>2차 서류</p>
            <p style={{ color: 'gray' }}>대면 면접 이후 최종합격</p>
          </div>
        </div>
      </div>

      <div className={styles['recruit-calender']}>
        <h2>모집 일정</h2>
        <div className={styles['calender-line']}>
          <div className={styles['calender-box']}>
            <h3>서류 접수</h3>
            <p>2025.3.4.(화)</p>
            <p>~ 3.18.(화)</p>
          </div>
          <div className={styles['calender-box']}>
            <h3>서류 합격 발표</h3>
            <p>2025.3.21(금)</p>
          </div>
          <div className={styles['calender-box']}>
            <h3>면접</h3>
            <p>2025.3.24(월)</p>
            <p>~3.26(수)</p>
          </div>
          <div className={styles['calender-box']}>
            <h3>최종합격 발표</h3>
            <p>2025.3.28(금)</p>
          </div>
        </div>
      </div>

      <div className={styles['recruit-apply']}>
        <h1>CRA와 함께 성장하고 싶다면</h1>
        <button className={styles['button-style']}>지원하기</button>
      </div>
    </div>
  );
}

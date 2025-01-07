import { Link } from 'react-router-dom';
import HeaderIntro from '~/components/Header/Intro-Header/HeaderIntro';
import styles from './RecruitPage.module.css';

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
        </div>
      </div>
      <form action="" method="POST">
        <div className={styles['recruit-page']}>
          <div className={styles['recruit-section']}>
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name" /*required*/
            />
          </div>
          <div className={styles['recruit-section']}>
            <label htmlFor="studentnumber">학번</label>
            <input type="text" id="studentnumber" /*required*/ />
          </div>
          <div className={styles['recruit-section']}>
            <label htmlFor="email">이메일</label>
            <input type="text" id="email" /*required*/ />
          </div>
          <div className={styles['recruit-section']}>
            <label htmlFor="Motivation">지원동기</label>
            <input type="text" id="Motivation" /*required*/ />
          </div>
          <div className={styles['recruit-section']}>
            <label htmlFor="experience">프로젝트 경험</label>
            <input type="text" id="experience" />
            <p>
              <input type="submit" />
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

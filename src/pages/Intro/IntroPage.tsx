import { Link } from 'react-router-dom';
import styles from './IntroPage.module.css';
import ProjectIntro from './ProjectIntro';

const element = [
  {
    title: 'project1',
    content: '프로젝트 내용',
  },
  {
    title: 'project2',
    content: '프로젝트 내용',
  },
];

export default function IntroPage() {
  return (
    <div className={styles['intro-page']}>
      <div
        className={`${styles['intro-section']} ${styles['intro-section-bg']}`}
      >
        <div className={styles['banner']}>
          LIVE YOUR
          <div>PASSION</div>
          CODE YOUR DREAMS
        </div>
        <img className={styles['character']} />
        <Link to="/recruit" className={styles['recruit']}>
          <p>2025-1 CRA RECRUITMENT</p>
        </Link>
      </div>
      <div className={styles['intro-section']}>
        <p>동아리 소개</p>
      </div>
      /
    </div>
  );
}

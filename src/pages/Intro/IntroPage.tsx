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
        <p className={styles['apply-button']}>
          <button>
            <Link to="/recruit">지원하기</Link>
          </button>
        </p>
      </div>
      <div className={styles['intro-section']}>
        <p>동아리 소개</p>
      </div>

      <div className={styles['intro-section']}>
        <p>
          동아리 프로젝트 소개
          <div className={styles['project-element']}>
            {element.map((elementData) => (
              <ProjectIntro key={elementData.title} {...elementData} />
            ))}
          </div>
          <button>&lt;</button>
          <button>&gt;</button>
        </p>
      </div>
    </div>
  );
}

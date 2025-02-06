import ProjectList from '~/components/Project/List/ProjectList';
import styles from '../Project/ProjectPage.module.css';

export default function ProjectPage() {
  return (
    <div className={styles['project-section']}>
      <p>프로젝트 페이지</p>
      <ProjectList />
    </div>
  );
}

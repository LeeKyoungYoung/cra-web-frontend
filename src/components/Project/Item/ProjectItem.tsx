import { Project } from '~/models/Project';
import ProjectPageList from '../List/ProjectList';
import styles from '../Project/ProjectItem.module.css';

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div className={styles['project-block']}>
      <div className={styles['project-picture']}>{project.imageUrls}</div>
      <div className={styles['title']}>{project.serviceName}</div>
      <div className={styles['content']}>{project.teamName}</div>
    </div>
  );
}

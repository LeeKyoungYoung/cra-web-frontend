import { Project } from '~/models/Project';
import styles from './ProjectItem.module.css';

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div className={styles['project-block']}>
      <div className={styles['project-picture']}>사진</div>
      <div className={styles['title']}>{project.serviceName}</div>
      <div className={styles['content']}>{project.teamName}</div>
    </div>
  );
}

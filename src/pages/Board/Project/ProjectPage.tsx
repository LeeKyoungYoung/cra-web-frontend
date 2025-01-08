import React from 'react';
import styles from '../Project/ProjectPage.module.css';
import ProjectList from '~/components/Project/List/ProjectList';

export default function ProjectPage() {
  return (
    <div>
      <div className={styles['project-section']}>
        <ProjectList />
      </div>
    </div>
  );
}

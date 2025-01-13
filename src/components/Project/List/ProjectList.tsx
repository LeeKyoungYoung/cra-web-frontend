import { useQuery } from '@tanstack/react-query';
import { getProjects } from '~/api/project';
import { QUERY_KEY } from '~/api/queryKey';
import { Project } from '~/models/Project';
import ProjectItem from '../Item/ProjectItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectList.module.css';

export default function ProjectList() {
  const projectQuery = useQuery<Project[]>({
    queryKey: QUERY_KEY.project.projects(),
    queryFn: async () => getProjects(),
  });

  let content;

  if (projectQuery.isLoading) {
    content = <div>로딩중...</div>;
  } else if (projectQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (projectQuery.isSuccess) {
    if (projectQuery.data.length === 0) {
      console.log('서버 통신 가능, 아직 데이터 없음');
    } else {
      content = (
        <div className={styles['project-list-container']}>
          {projectQuery.data.map((projectElement) => (
            <ProjectItem key={projectElement.id} project={projectElement} />
          ))}
        </div>
      );
    }
  }

  return <div className={styles['content']}>{content}</div>;
}

import { useQuery } from '@tanstack/react-query';
import { getProject } from '~/api/project';
import { QUERY_KEY } from '~/api/queryKey';
import { Project } from '~/models/Project';
import ProjectItem from '../Item/ProjectItem';
import { useState } from 'react';
import styles from './ProjectList.module.css';

//test data
const fakeProjects: Project[] = [
  { id: 1, serviceName: '프로젝트 1', teamName: '팀 1' },
  { id: 2, serviceName: '프로젝트 2', teamName: '팀 2' },
  { id: 3, serviceName: '프로젝트 3', teamName: '팀 3' },
  { id: 4, serviceName: '프로젝트 4', teamName: '팀 1' },
  { id: 5, serviceName: '프로젝트 5', teamName: '팀 2' },
  { id: 6, serviceName: '프로젝트 6', teamName: '팀 3' },
  { id: 6, serviceName: '프로젝트 6', teamName: '팀 3' },
  { id: 6, serviceName: '프로젝트 6', teamName: '팀 3' },
  { id: 6, serviceName: '프로젝트 6', teamName: '팀 3' },
  { id: 6, serviceName: '프로젝트 6', teamName: '팀 3' },

];

export default function ProjectList() {
  // const projectQuery = useQuery<Project[]>({
  //   queryKey: QUERY_KEY.project.projects(),
  //   queryFn: async () => {
  //     const projects = await getProject();
  //     return projects;
  //   },
  // });
  const projectQuery = {
    data: fakeProjects,
    isLoading: false,
    isError: false,
    isSuccess: true,
  };

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

  return <div>{content}</div>;
}

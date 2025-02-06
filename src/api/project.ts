import axios from 'axios';
import { Project } from '~/models/Project.ts';
import { client } from './client.ts';
import { authClient } from './auth/authClient.ts';

export const getProjects = async () => {
  try {
    const response = await client.get<Project[]>(`/project`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProjectById = async (id: number) => {
  try {
    const response = await client.get<Project>(`/project/view/${id}`);
    const project = response.data;

    return {
      ...project,
      // undefined 체크 후 기본값 설정
      createdAt: project.createdAt ? new Date(project.createdAt) : new Date(),
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createProjects = async (project: Project) => {
  try {
    // 권한이 필요한 작업에 authClient 사용
    const response = await authClient.post<Project>('/admin/project', project, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateProject = async (project: Project) => {
  try {
    // 권한이 필요한 작업에 authClient 사용
    const response = await authClient.put<Project>(
      `/admin/project/${project.id}`,
      project,
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteProject = async (id: number) => {
  try {
    // 권한이 필요한 작업에 authClient 사용
    const response = await authClient.delete(`/admin/project/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
import axios from 'axios';
import { Project } from '~/models/Project';
import client from './client';

export const getProjects = async () => {
  try {
    const response = await client.get<Project[]>(`/project`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const getProjectById = async (id: number) => {
  try {
    const response = await client.get<Project>(`/project/view/${id}`);
    const project = response.data;

    return {
      ...project,
      createdAt: new Date(project.createdAt),
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const createProjects = async (project: Project) => {
  try {
    const response = await client.post<Project>('/admin/project', project, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const updateProject = async (project: Project) => {
  try {
    const response = await client.put<Project>(
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
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const deleteProject = async (id: number) => {
  try {
    const response = await client.delete(`/admin/project/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

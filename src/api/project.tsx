import axios from 'axios';
import { Project } from '~/models/Project';
import { client } from './client';
import { authClient } from './auth/authClient';

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
      // undefined 체크 후 기본값 설정
      createdAt: project.createdAt ? new Date(project.createdAt) : new Date(),
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
    // 권한이 필요한 작업에 authClient 사용
    const response = await authClient.post<Project>('/admin/project', project, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Server Response:', error.response.data); // 서버에서 반환한 응답 데이터
      console.error('Status:', error.response.status); // HTTP 상태 코드
      console.error('Headers:', error.response.headers); // 응답 헤더
      throw new Error(
        `Axios error: ${error.response.data?.message || error.message}`,
      );
    } else {
      throw new Error('An unexpected error occurred');
    }
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
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const deleteProject = async (id: number) => {
  try {
    // 권한이 필요한 작업에 authClient 사용
    const response = await authClient.delete(`/admin/project/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const uploadImage = async (file: File): Promise<string | null> => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(
      'http://3.35.116.122:8080/api/image/upload?imageCategory=1',
      {
        method: 'POST',
        body: formData,
      },
    );

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const imageUrl = await response.text();
    return imageUrl; // 업로드 성공 시 반환된 이미지 URL
  } catch (error) {
    console.error('Image upload failed:', error);
    return null; // 업로드 실패 시 null 반환
  }
};

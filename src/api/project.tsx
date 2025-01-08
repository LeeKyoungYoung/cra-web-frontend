import { isAxiosError } from 'axios';
import { Project } from '../models/Project';
import client from './client';

//Get
export const getProject = async () => {
  try {
    const response = await client.get<Project[]>(`/project`);
    const project = response.data;
    return project;
  } catch (error) {
    if (isAxiosError(error)) {
      throw `Error fetching data: ${error.message}`;
    } else {
      throw 'An unexpected error occurred';
    }
  }
};

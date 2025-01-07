import client from './client';
import { data } from 'react-router-dom';
import axios from 'axios';
import { Comment } from '../models/Comment';
import { error } from 'console';

//get
export const getCommentsByCategory = async (boardId: number) => {
  try {
    const response = await client.get<Comment[]>(`/comment/${boardId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

//post
export const createComments = async (comment: Comment, boardId: number) => {
  try {
    const response = await client.post<Comment>(
      `/comment/${boardId}`,
      comment,
      {
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

//post
export const createChildComments = async (
  comment: Comment,
  boardId: number,
  parentId: number,
) => {
  try {
    const response = await client.post<Comment>(
      `/comment/${boardId}`,
      {
        userId: comment.userId,
        parentCommentId: parentId,
        content: comment.content,
      },
      {
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

//put
export const updateComments = async (comment: Comment) => {
  try {
    const response = await client.put<Comment>(
      `/comment/${comment.id}`,
      comment,
      {
        headers: { 'Conetent-type': 'application/json; charset=UTF-8' },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

//delete
export const deleteComments = async (id: number) => {
  try {
    const response = await client.delete<Comment>(`/comment/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

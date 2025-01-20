import { client } from './client';
import axios from 'axios';
import { Comment } from '~/models/Comment';
import { authClient } from './auth/authClient';

//get
export const getCommentsByBoardId = async (boardId: number) => {
  try {
    const response = await client.get<Comment[]>(`/comment/${boardId}`);

    // createdAt 필드를 Date 객체로 변환
    let comments: Comment[] = [];
    response.data.forEach((comment) => {
      let replies: Comment[] = [];
      comment.commentList.forEach((reply) => {
        replies.push({
          ...reply,
          createdAt: new Date(reply.createdAt),
        });
      });
      comments.push({
        ...comment,
        createdAt: new Date(comment.createdAt),
        commentList: replies,
      });
    });

    return comments;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const getCommentsCountByCategory = async (boardId: number) => {
  try {
    const response = await client.get<number>(`/comment/count/${boardId}`);
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
    // 권한이 필요한 작업에 authClient 사용
    const response = await authClient.post<Comment>(
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
    // 권한이 필요한 작업에 authClient 사용
    const response = await authClient.post<Comment>(
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
    // 권한이 필요한 작업에 authClient 사용
    const response = await authClient.put<Comment>(
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
    // 권한이 필요한 작업에 authClient 사용
    const response = await authClient.delete<Comment>(`/comment/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

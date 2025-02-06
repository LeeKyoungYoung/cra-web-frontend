import axios from 'axios';
import { authClient } from './auth/authClient';

const createLike = async (boardId: number, userId: number, isLike: boolean) => {
  try {
    const response = await authClient.post(`/board/like/${boardId}`, null, {
      params: {
        userId,
        isLike,
      },
    });
    return response.data;
  } catch (error) {
    console.error('좋아요 증가 실패', error);
    throw new Error('좋아요 증가 중 오류가 발생했습니다.');
  }
};
export default createLike;

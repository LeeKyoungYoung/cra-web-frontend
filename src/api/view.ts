import { authClient } from './auth/authClient';

// POST/View
export const view = async (id: number) => {
  try {
    const response = await authClient.post(`/board/view/${id}`);
    return response.data;
  } catch (error) {
    console.error('조회수 증가 실패:', error);
    throw new Error('조회수 증가 중 오류가 발생했습니다.');
  }
};

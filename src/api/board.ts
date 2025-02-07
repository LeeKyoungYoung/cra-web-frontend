import axios, { AxiosError } from 'axios';
import { Board } from '~/models/Board.ts';
import { client } from './client.ts';
import { authClient } from './auth/authClient.ts';

// [GET]
export const getBoardCountByCategory = async (category: number) => {
  try {
    const response = await client.get<Board[]>(`/board/${category}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// [GET] by Pagination
export const getBoardsByCategory = async (
  category: number,
  page: number = 1,
  perPage: number = 10,
  orderBy: number = 0,
  isASC: boolean = true,
) => {
  try {
    const response = await client.get<Board[]>(
      `/board/${category}/page/${page}`,
      {
        params: {
          perPage,
          orderBy,
          isASC,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// id로 게시물 가져오기 (Detail 페이지에 사용)
export const getBoardById = async (id: number) => {
  try {
    const response = await client.get<Board>(`/board/view/${id}`);
    const board = response.data;

    return {
      ...board,
      createdAt: board.createdAt ? new Date(board.createdAt) : new Date(), // createAt을 Date 객체로 변환
    };
  } catch (error) {
    console.log('⚠️ Error occurred while fetching board:', error);
    // 원본 error를 그대로 throw
    throw error;
  }
};

// [POST]
// 새로운 게시판(Board)을 생성하기 위해 서버에 POST 요청을 보내는 메소드
// parameter로 Board 타입의 객체를 받아서 서버로 전송
export const createBoards = async (board: Board, files: File[]) => {
  try {
    const formData = new FormData();

    formData.append(
      'board',
      new Blob([JSON.stringify(board)], { type: 'application/json' }),
    );

    files.forEach((file) => {
      formData.append('files', file);
    });

    const response = await authClient.post<FormData>('/board', formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// POST/View
export const createBoardsView = async (id: number) => {
  try {
    const response = await authClient.post(`/board/view/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// PUT
export const updateBoards = async (board: Board) => {
  try {
    // 권한이 필요한 작업에 authClient 사용
    const response = await authClient.put<Board>(`/board/${board.id}`, board, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// DELETE

export const deleteBoards = async (id: number) => {
  try {
    // 권한이 필요한 작업에 authClient 사용
    const response = await authClient.delete(`/board/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const onUploadImage = async (blob: File) => {
  const formData = new FormData();
  formData.append('image', blob);

  try {
    const response = await authClient.post('/image/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    const imageUrl = response.data;

    console.log('받은 이미지 URL:', imageUrl);
    alert('이미지 업로드 성공');

    return imageUrl; // 이미지 URL만 반환 (callback 없음)
  } catch (error) {
    console.error('이미지 업로드 실패:', error);
    alert('이미지 업로드 실패');
    throw error;
  }
};

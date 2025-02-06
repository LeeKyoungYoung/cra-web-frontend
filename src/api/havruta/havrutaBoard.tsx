import axios from 'axios';
import { HavrutaBoard } from '~/models/Havruta';
import { client } from '~/api/client';
import { authClient } from '~/api/auth/authClient';

// 페이지네이션 적용된 하브루타 게시물 모두 가져오기
export const getHavrutaBoards = async (
  page: number = 1,
  perPage: number = 10,
  orderBy: number = 0,
) => {
  try {
    const response = await client.get<HavrutaBoard[]>(
      `/board/havruta/page/${page}`,
      {
        params: {
          perPage,
          orderBy,
          isASC: false,
        },
      },
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

// 하브루타 게시물 모두 가져오기
export const getHavrutaBoardsCount = async () => {
  try {
    const response = await client.get<HavrutaBoard[]>(`/board/havruta`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

// 과목별 하브루타 게시물 모두 가져오기
export const getHavrutaBoardsByHavrutaId = async (
  havrutaId: number,
  page: number = 1,
  perPage: number = 10,
  orderBy: number = 0,
) => {
  try {
    const response = await client.get<HavrutaBoard[]>(
      `/board/havruta/${havrutaId}/page/${page}`,
      {
        params: {
          perPage,
          orderBy,
          isASC: false,
        },
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

export const getHavrutaBoardsCountByHavrutaId = async (havrutaId: number) => {
  try {
    const response = await client.get<HavrutaBoard[]>(
      `/board/havruta/${havrutaId}`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

// 하브루타 게시물 상세보기
export const getHavrutaBoardById = async (id: number) => {
  try {
    const response = await client.get<HavrutaBoard>(
      `/board/havruta/view/${id}`,
    );
    const havruta = response.data;

    return {
      ...havruta,
      createdAt: havruta.createdAt ? new Date(havruta.createdAt) : new Date(),
    };
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

// 하브루타 게시물 작성하기
export const createHavrutaBoard = async (havrutaBoard: HavrutaBoard) => {
  try {
    const response = await authClient.post<HavrutaBoard>(
      '/board/havruta',
      havrutaBoard,
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Failed to post data:', error);

    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

// 하브루타 게시물 수정하기
export const updateHavrutaBoard = async (havrutaBoard: HavrutaBoard) => {
  try {
    const response = await authClient.put<HavrutaBoard>(
      `/board/havruta/${havrutaBoard.id}`,
      havrutaBoard,
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Failed to update data:', error);

    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

// 하브루타 게시물 삭제하기
export const deleteHavrutaBoards = async (id: number) => {
  try {
    const response = await authClient.delete(`/board/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete havruta board:', error);
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

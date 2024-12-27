import axios from 'axios';
import { Board } from '../models/Board';
import client from './client';

// GET
export const getBoardsByCategory = async (category: number) => {
  try {
    const response = await client.get<Board[]>(`/board/${category}`);
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

// POST
export const createBoards = async (board: Board) => {
  try {
    const response = await client.post<Board>('/board', board, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

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

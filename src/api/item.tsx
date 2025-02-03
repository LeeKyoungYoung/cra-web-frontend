import axios from 'axios';
import { client } from './client';
import { Item } from '~/models/Item';

export const getItems = async (itemCategory: number) => {
  try {
    const response = await client.get<Item[]>(`/item/${itemCategory}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const getItemById = async (id: number) => {
  try {
    const response = await client.get<Item>(`/item/view/${id}`);
    const Item = response.data;

    return {
      ...Item,
      // undefined 체크 후 기본값 설정
      createdAt: Item.createdAt ? new Date(Item.createdAt) : new Date(),
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const createItems = async (item: Item) => {
  try {
    const response = await client.post<Item>('/admin/item', item, {
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

export const updateItem = async (item: Item) => {
  try {
    const response = await client.put<Item>(`/admin/item/${item.id}`, item, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
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

export const deleteItem = async (id: number) => {
  try {
    const response = await client.delete(`/admin/item/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

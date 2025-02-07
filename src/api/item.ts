import axios from 'axios';
import { Item } from '~/models/Item.ts';
import { client } from './client.ts';

export const getItems = async (itemCategory: number) => {
  try {
    const response = await client.get<Item[]>(`/item/${itemCategory}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
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
    console.log(error);
    throw error;
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
    console.log(error);
    throw error;
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
    console.log(error);
    throw error;
  }
};

export const deleteItem = async (id: number) => {
  try {
    const response = await client.delete(`/admin/item/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

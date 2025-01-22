import axios from 'axios';
import { Havruta } from '~/models/Havruta';
import { client } from '~/api/client';
import { authClient } from '~/api/auth/authClient';

export const getHavrutas = async () => {
  try {
    const response = await client.get<Havruta[]>(`/admin/havruta`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const getHavrutaById = async (id: number) => {
  try {
    const response = await client.get<Havruta>(`/admin/havruta/view/${id}`);
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

export const createHavruta = async (havruta: Havruta) => {
  try {
    const response = await authClient.post<Havruta>('/admin/havruta', havruta, {
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

export const updateHavruta = async (havruta: Havruta) => {
  try {
    const response = await authClient.put<Havruta>(
      `/admin/havruta/${havruta.id}`,
      havruta,
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

export const deleteHavruta = async (id: number) => {
  try {
    const response = await authClient.delete(`/admin/havruta/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete board:', error);

    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

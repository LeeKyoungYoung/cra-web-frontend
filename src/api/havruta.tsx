import { Havruta } from '~/models/Havruta';
import client from './client';
import axios from 'axios';

//get/all // 게시글 전체 받아오기기
export const getHavruta = async () => {
  try {
    const response = await client.get<Havruta[]>(`/havruta`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

//get/id // 과목명, 교수명 받아오기 - 페이지에서 사이드 바 눌렀을 때
export const getHavrutaById = async (id: number) => {
  try {
    const response = await client.get<Havruta>(`/board/havruta/${id}`);
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

//get/view/id // 게시글 자세히 보기 - 페이지에서 게시글 눌렀을 때 DETAIL
export const getHavrutaViewById = async (id: number) => {
  try {
    const response = await client.get<Havruta>(`/board/havruta/view/${id}`);
    const havruta = response.data;

    return {
      ...havruta,
      createdAt: new Date(havruta.createdAt), // createAt을 Date 객체로 변환
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

//post
export const createHavruta = async (havruta: Havruta) => {
  try {
    const response = await client.post<Havruta>('/board/havruta', havruta, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    // 서버에서 반환된 데이터에서 실제 본문 데이터를 추출하여 반환
    return response.data;
  } catch (error) {
    // 에러 처리
    console.error('Failed to post data:', error);

    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

// PUT
export const updateHavruta = async (havruta: Havruta) => {
  try {
    const response = await client.put<Havruta>(
      `/board/havruta/${havruta.id}`,
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

//////////////////////////////////////// ADMIN  ////////////////////////////////////////
//어드민 => 과목명, 교수명 CRUD

//post
export const createHavrutaAdmin = async (havruta: Havruta) => {
  try {
    const response = await client.post<Havruta>('/admin/havruta', havruta, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    // 서버에서 반환된 데이터에서 실제 본문 데이터를 추출하여 반환
    return response.data;
  } catch (error) {
    // 에러 처리
    console.error('Failed to post data:', error);

    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

//get/ all
export const getHavrutaAdmin = async () => {
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

//get /id
export const getHavrutaByIdAdmin = async (id: number) => {
  try {
    const response = await client.get<Havruta>(`/admin/havruta/view/${id}`);
    const havruta = response.data;

    return {
      ...havruta,
      createdAt: new Date(havruta.createdAt), // createAt을 Date 객체로 변환
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

//put
export const updateHavrutaAdmin = async (havruta: Havruta) => {
  try {
    const response = await client.put<Havruta>(
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

//delete
export const deleteHavrutaAdmin = async (id: number) => {
  try {
    const response = await client.delete(`/admin/havruta/${id}`);
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

import axios from 'axios';
import { Board } from '../models/Board';
import { client } from './client';
import { authClient } from './auth/authClient';

// [GET]
// async를 사용하여 Promise를 반환하는 비동기 함수 (Promise는 비동기 작업의 완료 or 실패를 나타내는 JS 객체)
// parameter는 category(숫자)로 받음
// 외부에서 사용할 수 있게 export 해줌
export const getBoardsByCategory = async (category: number) => {
  // try 블록에서 await를 사용해서 HTTP 요청을 보냄 -> 문제가 발생하면 catch 블록으로 이동
  try {
    // client.get은 Axios에서 제공하는 HTTP GET 요청을 수행하는 함수
    // category에 맞는 게시판의 게시물을 Board 타입 배열 형태로 가져옴
    // await를 사용하여 작업이 완료될 때 까지 기다림
    // 완료되면 await는 결과를 response 변수에 저장함
    const response = await client.get<Board[]>(`/board/${category}`);
    // response에서 서버가 반환한 실제 데이터를 봔환
    return response.data;
  } catch (error) {
    // Promise가 Rejected 상태가 되면 catch에서 처리
    // Axios 요청이 실패하거나 에러가 발생하면 catch로 넘어옴
    // 디버깅 목적으로 console에 error를 출력
    console.log(error);
    // 오류가 Axios에서 발생한 오류인지 확인
    // Axios에서는 HTTP 요청 실패 시에 AxiosError 객체를 생성
    // isAxiosError를 사용하여 오류 식별
    if (axios.isAxiosError(error)) {
      // error.messsage를 포함하여 Error 객체를 생성하여 throw한다
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
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
    console.log(error);
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

// [POST]
// 새로운 게시판(Board)을 생성하기 위해 서버에 POST 요청을 보내는 메소드
// parameter로 Board 타입의 객체를 받아서 서버로 전송
export const createBoards = async (board: Board) => {
  try {
    // client에서 URL를 가져와서 /board를 붙여서 데이터를 보냄
    // 권한이 필요한 작업에 authClient 사용
    const response = await authClient.post<Board>('/board', board, {
      // 서버가 요청 데이터를 JSON 형식으로 인식하도록 명시, 문자 인코딩 방식 지정
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
    console.error('Failed to update data:', error);

    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

// DELETE

export const deleteBoards = async (id: number) => {
  try {
    // 권한이 필요한 작업에 authClient 사용
    const response = await authClient.delete(`/board/${id}`);
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

export const onUploadImage = async (
  blob: File,
  callback: (url: string) => void,
) => {
  const formData = new FormData();
  formData.append('image', blob);

  try {
    const response = await authClient.post('/image/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    const imageUrl = response.data;
    
    console.log('받은 이미지 URL:', imageUrl); // URL 확인용 로그

    callback(imageUrl); // 전체 S3 이미지 URL 전달
    alert('이미지 업로드 성공');
  } catch (error) { 
    console.error('이미지 업로드 실패:', error);
    alert('이미지 업로드 실패');
  }
};
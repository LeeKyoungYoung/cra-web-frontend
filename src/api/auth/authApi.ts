import axios from 'axios';
import { AuthClient } from '~/api/client.ts';
import {
  ReqSignUp,
  ResSignUp,
  ReissueToken,
  Login,
  ResponseToken,
} from '~/models/Auth.ts';

export const login = async (data: Login): Promise<ResponseToken> => {
  try {
    const response = await AuthClient.post<ResponseToken>('/auth/login', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // 서버에서 반환한 메시지에 접근
      const errorMessage =
        error.response.data?.message || 'Unknown error during Login';
      console.error('Login Error:', errorMessage);
      throw new Error(errorMessage);
    } else {
      // 예상치 못한 오류 처리
      console.error('Unexpected Error:', error);
      throw new Error('Unexpected Error occurred during Login');
    }
  }
};

export const signUp = async (data: ReqSignUp): Promise<ResSignUp> => {
  try {
    const response = await AuthClient.post<ResSignUp>('/auth/signup', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('SignUp Error:', error.response.data);
      throw new Error(error.response.data?.message || 'Error during SignUp');
    } else {
      throw new Error('Unexpected Error occurred during SignUp');
    }
  }
};

export const reissueToken = async (
  data: ReissueToken,
): Promise<ResponseToken> => {
  try {
    const response = await AuthClient.post<ResponseToken>(
      '/auth/reissue-token',
      data,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('SignUp Error:', error.response.data);
      throw new Error(error.response.data?.message || 'Error during SignUp');
    } else {
      throw new Error('Unexpected Error occurred during SignUp');
    }
  }
};

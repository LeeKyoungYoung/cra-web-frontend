import React from 'react';
import axios from 'axios';
import { authClient } from './client';
import {
  ReqSignUp,
  ResSignUp,
  ReissueToken,
  Login,
  ResponseToken,
} from '~/models/Auth';

export const login = async (data: Login): Promise<ResponseToken> => {
  try {
    const response = await authClient.post<ResponseToken>('/auth/login', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Login Error:', error.response.data);
      throw new Error(error.response.data?.message || 'Error during Login');
    } else {
      throw new Error('Unexpected Error occurred during Login');
    }
  }
};

export const signUp = async (data: ReqSignUp): Promise<ResSignUp> => {
  try {
    const response = await authClient.post<ResSignUp>('/auth/signup', data);
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
    const response = await authClient.post<ResponseToken>(
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

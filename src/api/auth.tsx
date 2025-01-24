import axios from 'axios';
import {
  SignupRequest,
  SignupResponse,
  LoginRequest,
  LoginResponse,
  TokenReissueRequest,
  TokenReissueResponse,
} from '../models/Auth';

// 회원가입 API 호출
export const signup = async (data: SignupRequest): Promise<SignupResponse> => {
  const response = await axios.post<SignupResponse>('/api/auth/signup', data);
  return response.data;
};

// 로그인 API 호출
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>('/api/auth/login', data);
  return response.data;
};

// 토큰 갱신 API 호출
export const reissueToken = async (
  data: TokenReissueRequest
): Promise<TokenReissueResponse> => {
  const response = await axios.post<TokenReissueResponse>('/api/auth/reissue-token', data);
  return response.data;
};

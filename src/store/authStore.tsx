import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  ReqSignUp,
  ResSignUp,
  ReissueToken,
  Login,
  ResponseToken,
} from '~/models/Auth';
import { login, signUp, reissueToken } from '~/api/authApi';

// Zustand에서 관리할 상태의 구조, 데이터 Type 정의
interface authStore {
  login: (data: Login) => Promise<void>; // 로그인 요청 처리
  signUp: (data: ReqSignUp) => Promise<void>; // 새로운 사용자 등록 처리
  reissueToken: (data: ReissueToken) => Promise<void>; // 저장된 Refresh Token으로 새로운 Access, Refresh Token 받는 요청 처리
  logout: () => void; // 로그아웃 처리 (상태 초기화, 토큰 제거)
  userId: number; // 현재 로그인된 사용자의 고유 Id 저장
  accessToken: string; // 로그인 성공 시 서버에서 발급한 Access Token 저장
  refreshToken: string; // Access Token이 만료되었을때, 새로운 토근을 발급받기 위한 Refresh Token을 저장
  isAuthenticated: boolean; // 현재 로그인 상태인가?
}

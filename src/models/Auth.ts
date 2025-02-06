// ex) 기능: paramater -> return value

// 로그인: Login -> ResponseToken

// 회원가입: ReqSignUp -> ResSignUp

// 토큰 재발급: ReissueToken -> ResponseToken

interface ReqSignUp {
  username: string;
  password: string;
  email: string;
  name: string;
  githubId: string;
  studentNumber: number;
  term: string;
}

interface ResSignUp { // no password
  id: number; 
  username: string;
  email: string;
  name: string;
  githubId: string;
  studentNumber: number;
  term: string;
}

interface ReissueToken {
  userId: number;
  refreshToken: string;
}

interface Login {
  username: string;
  password: string;
}

interface ResponseToken {
  userId: number;
  accessToken: string;
  refreshToken: string;
}

export type { ReqSignUp, ResSignUp, ReissueToken, Login, ResponseToken };

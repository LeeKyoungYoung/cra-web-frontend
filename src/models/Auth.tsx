interface ReqSignUp {
  id: number;
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

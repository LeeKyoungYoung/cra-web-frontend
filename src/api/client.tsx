import axios from 'axios';

const client = axios.create();
//client에 새로운 Axios 인스턴스 생성

client.defaults.baseURL = import.meta.env.VITE_API_BASE_URL as string;
//클라이언트의 기본 url을 지정 = 환경변수(VITE_API_BASE_URL) 로 설정
//장점 : 기본 url을 요청마다 API 서버의 공통 url을 반복해서 작성할 필요가 없다.
//ex)  axios.get('https://api.example.com/users');
//  -> client.get('/users');
//효과 : 코드의 가독성 향상, 유지보수 간편

// Auth 관련 api 가져오기
const AuthClient = axios.create();
AuthClient.defaults.baseURL = import.meta.env.VITE_API_BASE_URL as string;
AuthClient.defaults.headers.common['Content-Type'] =
  'application/json; charset=UTF-8';

export { client, AuthClient };

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '~/store/authStore';
import HeightSpacer from '~/components/Common/HeightSpacer';
import styled from 'styled-components';
import styles from './LoginForm.module.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 668px;
  padding-top: 15rem;
  padding-bottom: 15%;
  margin: 0 auto;
`;
const Title = styled.div`
  h2 {
    text-align: center;
    font-size: 40px;
    line-height: 59px;
    margin-bottom: 70px;
    color: var(--color-bright-text);
    user-select: none;
  }
`;
const MainContainer = styled.div``;
const Search = styled.div`
  margin: 1.5rem 0 0 0;
  transform: translate(2rem);
  text-align: end;
  line-height: 34px;
  user-select: none;
`;
const Login = styled.div`
  input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 68px;
    background-color: var(--color-primary);
    border: none;
    border-radius: 10px;
    color: #ffffff;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 14px;
    cursor: pointer;
  }
`;
const Register = styled.div`
  width: 100%;
  line-height: 34px;
  margin: 1rem 0;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-dark-text);
  user-select: none;
`;

const AuthButtons = styled.div``;

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ username, password });
      alert('로그인 성공');
      navigate('/main');
    } catch (error) {
      console.error('Login Handling Error: ', error);
      alert('로그인 실패');
    }
  };
  return (
    <Container>
      <Title>
        <h2>로그인</h2>
      </Title>
      <MainContainer>
        <form onSubmit={handleLogin}>
          <div className={styles['id']}>
            <label htmlFor="id">Username</label>
            <input
              type="text"
              placeholder="Enter the Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <HeightSpacer space={28} />
          <div className={styles['password']}>
            <label htmlFor="password">Password</label>
            <div className={styles['password-input-container']}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter the Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles['checkbox-container']}>
              <input
                type="checkbox"
                id="show-password"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <label htmlFor="show-password">비밀번호 보기</label>
            </div>
          </div>
          <AuthButtons>
            <Search>
              <Link to="/idsearch" className={styles['search-link']}>
                아이디 찾기
              </Link>
              <span>|</span>
              <Link to="/pwsearch" className={styles['search-link']}>
                비밀번호 찾기
              </Link>
            </Search>
            <Login>
              <input type="submit" value={'로그인'} />
            </Login>
          </AuthButtons>
        </form>
        <Register>
          <span>아직 CRA의 회원이 아니신가요? </span>
          <Link to="/register" className={styles['register-link']}>
            회원가입하기
          </Link>
        </Register>
      </MainContainer>
    </Container>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '~/store/authStore';
import HeightSpacer from '~/components/Common/HeightSpacer';
import CryptoJS from 'crypto-js';
import styled from 'styled-components';
import styles from './LoginForm.module.css';
import AlertModal from '~/components/Modal/Alert/AlertModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 668px;
  padding-top: 5rem;
  padding-bottom: 6rem;
  margin: 0 auto;
`;
const Title = styled.div`
  p {
    text-align: center;
    font-size: 40px;
    font-family: 'Pretendard Bold';
    line-height: 59px;
    margin-bottom: 70px;
    color: var(--color-bright-text);
    user-select: none;
  }
`;
const MainContainer = styled.div``;
const IdOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Search = styled.div`
  text-align: end;
  line-height: 34px;
  user-select: none;
`;
const Login = styled.div`
  input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 103.5%;
    height: 68px;
    background-color: var(--color-primary);
    border: none;
    border-radius: 10px;
    color: #ffffff;
    font-size: 30px;
    font-family: 'Pretendard Bold';
    margin-top: 40px;
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
  font-family: 'Pretendard Medium';
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

  const [modalIsOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const secretKey = '1234567890123456'; // 예시 나중에 바꿀거임 (진짜)
    const iv = CryptoJS.enc.Utf8.parse('1234567890123456'); // IV 설정
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      CryptoJS.enc.Utf8.parse(secretKey),
      {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      },
    ).toString();
    try {
      await login({ username, password: encryptedPassword });
      // 확인용 (나중에 없앨꺼임)
      console.log(username);
      console.log(password);
      console.log(encryptedPassword);
      alert('로그인 성공');
      navigate('/main');
    } catch (error) {
      console.error('Login Handling Error: ', error);
      openModal();
    }
  };

  return (
    <Container>
      <Title>
        <p>로그인</p>
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
          </div>
          <IdOptionsContainer>
            <div className={styles['checkbox-container']}>
              <input
                type="checkbox"
                id="show-password"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <label htmlFor="show-password">비밀번호 보기</label>
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
            </AuthButtons>
          </IdOptionsContainer>
          <Login>
            <input type="submit" value={'로그인'} />
          </Login>
        </form>
        <Register>
          <span>혹시 계정이 없으신가여? </span>
          <Link to="/register" className={styles['register-link']}>
            회원가입하기
          </Link>
        </Register>
      </MainContainer>
      {modalIsOpen && <AlertModal closeModal={closeModal} />}
    </Container>
  );
};

export default LoginForm;

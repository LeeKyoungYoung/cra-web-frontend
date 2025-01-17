import React, { FormEvent, useState } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '~/store/authStore';
import styled from 'styled-components';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
    <div className={styles['container']}>
      <div className={styles['title']}>
        <h2>로그인</h2>
      </div>
      <div className={styles['main-container']}>
        <form onSubmit={handleLogin}>
          <div className={styles['id']}>
            <label htmlFor="id">Username</label>
            <input
              type="text"
              placeholder="Enter the Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles['password']}>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="Enter the Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles['search']}>
            <Link to="/idsearch" className={styles['search-link']}>
              아이디 찾기
            </Link>
            <span>|</span>
            <Link to="/pwsearch" className={styles['search-link']}>
              비밀번호 찾기
            </Link>
          </div>
          <div className={styles['login']}>
            <input type="submit" value={'로그인'} />
          </div>
        </form>
        <div className={styles['register']}>
          <span>아직 CRA의 회원이 아니신가요? </span>
          <Link to="/register" className={styles['register-link']}>
            회원가입하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

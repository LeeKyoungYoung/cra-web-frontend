import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>
        <h2>로그인</h2>
      </div>
      <div className={styles['main-container']}>
        <form>
          <div className={styles['id']}>
            <label htmlFor="id">아이디</label>
            <input
              type="text"
              name="id"
              id="id"
              placeholder="아이디를 입력하세요."
            />
          </div>
          <div className={styles['id-password-space']} />
          <div className={styles['password']}>
            <label htmlFor="password">비밀번호</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="비밀번호를 입력하세요."
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
}

export default LoginPage;

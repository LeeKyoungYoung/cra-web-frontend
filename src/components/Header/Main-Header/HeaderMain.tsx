import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import craIconBlue from '~/assets/images/cra-logo-blue.png';
import { useAuthStore } from '~/store/authStore';
import styles from './HeaderMain.module.css';
import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 1.5rem;
  font-family: 'Pretendard Bold';
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 2rem;
  cursor: pointer;
`;

export default function HeaderMain() {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    try {
      logout();
      alert('로그아웃 성공');
      navigate('/main');
    } catch (error) {
      alert('로그아웃 실패');
    }
  };

  // const handleMyInfo = () => {
  //   navigate('/info');
  // };
  return (
    <div className={styles['header-main']}>
      <Link to="/main">
        <img src={craIconBlue} alt="크라 아이콘" className={styles['logo']} />
      </Link>
      <ul>
        <li>
          <Link
            to="/notice"
            className={`${styles['link']} ${styles['navbar-link']}`}
          >
            Notice
          </Link>
        </li>
        <li>
          <Link
            to="/academic"
            className={`${styles['link']} ${styles['navbar-link']}`}
          >
            Academic
          </Link>
        </li>
        <li>
          <Link
            to="/book"
            className={`${styles['link']} ${styles['navbar-link']}`}
          >
            Book
          </Link>
        </li>
        <li>
          <Link
            to="/equip"
            className={`${styles['link']} ${styles['navbar-link']}`}
          >
            Equipment
          </Link>
        </li>
        <li>
          <Link
            to="/havruta"
            className={`${styles['link']} ${styles['navbar-link']}`}
          >
            Havruta
          </Link>
        </li>
        <li>
          <Link
            to="/project"
            className={`${styles['link']} ${styles['navbar-link']}`}
          >
            Project
          </Link>
        </li>
      </ul>
      {isAuthenticated ? (
        <>
          <Button onClick={handleLogout}>로그아웃</Button>
        </>
      ) : (
        <>
          <Button onClick={handleLogin}>로그인</Button>
        </>
      )}

      {/* 로그인 하기 전에는 '로그인' Link이고, 로그인 이후에는 '내 정보' 버튼, 클릭 시 모달 출력력 */}
    </div>
  );
}

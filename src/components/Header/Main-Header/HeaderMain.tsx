import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import craIconBlue from '~/assets/images/cra-logo-blue.png';
import { useAuthStore } from '~/store/authStore';
import { useUIStore } from '~/store/uiStore';
import styles from './HeaderMain.module.css';
import styled from 'styled-components';

export default function HeaderMain() {
  const { isAuthenticated, logout } = useAuthStore();
  const { isMenuOpen, toggleMenu } = useUIStore();
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
        <img src={craIconBlue} alt="크라 아이콘" className={styles.logo} />
      </Link>

      <button className={styles['menu-toggle']} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul
        className={`${styles['nav-menu']} ${isMenuOpen ? styles.active : ''}`}
      >
        {[
          { path: '/notice', label: 'Notice' },
          { path: '/academic', label: 'Academic' },
          { path: '/book', label: 'Book' },
          { path: '/item', label: 'Item' },
          { path: '/havruta', label: 'Havruta' },
          { path: '/project', label: 'Project' },
        ].map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`${styles['link']} ${styles['navbar-link']} ${
                location.pathname.startsWith(path) ? styles.active : ''
              }`}
              onClick={toggleMenu}
            >
              {label}
            </Link>
          </li>
        ))}

        <li className={styles['mobile-authbutton']}>
          {isAuthenticated ? (
            <button className={styles.authbutton} onClick={handleLogout}>
              로그아웃
            </button>
          ) : (
            <button className={styles.authbutton} onClick={handleLogin}>
              로그인
            </button>
          )}
        </li>
      </ul>

      <div className={styles['desktop-authbutton']}>
        {isAuthenticated ? (
          <>
            <button className={styles.authbutton} onClick={handleLogout}>
              로그아웃
            </button>
          </>
        ) : (
          <>
            <button className={styles.authbutton} onClick={handleLogin}>
              로그인
            </button>
          </>
        )}
      </div>
    </div>
  );
}

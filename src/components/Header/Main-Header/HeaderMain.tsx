import React from 'react';
import { Link } from 'react-router-dom';
import craIconBlue from '~/assets/images/cra-logo-blue.png';
import styles from './HeaderMain.module.css';

export default function HeaderMain() {
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
      <Link to="/login" className={`${styles['link']} ${styles['login']}`}>
        로그인
      </Link>
      {/* 로그인 하기 전에는 '로그인' Link이고, 로그인 이후에는 '내 정보' 버튼, 클릭 시 모달 출력력 */}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMain.css';

export default function HeaderMain() {
  return (
    <div className="header-main">
      <Link to="/main" className="link logo-link">
        로고
      </Link>
      <ul>
        <li>
          <Link to="/notice" className="link navbar-link">
            Notice
          </Link>
        </li>
        /
        <li>
          <Link to="/academic" className="link navbar-link">
            Academic
          </Link>
        </li>
        /
        <li>
          <Link to="/book" className="link navbar-link">
            Book
          </Link>
        </li>
        /
        <li>
          <Link to="/equip" className="link navbar-link">
            Equipment
          </Link>
        </li>
        /
        <li>
          <Link to="/havruta" className="link navbar-link">
            Havruta
          </Link>
        </li>
      </ul>
      <Link to="/login" className="link login-link">
        로그인
      </Link>
      {/* 로그인 하기 전에는 '로그인' Link이고, 로그인 이후에는 '내 정보' 버튼, 클릭 시 모달 출력력 */}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderMain() {
  return (
    <div>
      <Link to="/main">로고</Link>
      <ul>
        <li>
          <Link to="/notice">Notice</Link>
        </li>
        <li>
          <Link to="/academic">Academic</Link>
        </li>
        <li>
          <Link to="/book">Book</Link>
        </li>
        <li>
          <Link to="/equipment">Equipment</Link>
        </li>
        <li>
          <Link to="/havruta">Havruta</Link>
        </li>
      </ul>
      <Link to="/login">로그인</Link>
      {/* 로그인 하기 전에는 '로그인' Link이고, 로그인 이후에는 '내 정보' 버튼, 클릭 시 모달 출력력 */}
    </div>
  );
}

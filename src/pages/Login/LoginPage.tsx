import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <div>로그인 페이지</div>
      <Link to="/register">회원가입</Link>
    </>
  );
}

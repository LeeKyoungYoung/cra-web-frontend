import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 처리 로직 추가
    if (!email || !password) {
      alert('이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }
    console.log('로그인 시도: ', email, password);
  };

  return (
    <div className="login-container">
      <h2 className="title">로그인 페이지</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-container">
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
        <button type="submit" className="login-button">
          로그인
        </button>
      </form>
      <div className="register-link">
        <Link to="/register">회원가입</Link>
      </div>
    </div>
  );
};

export default LoginPage;

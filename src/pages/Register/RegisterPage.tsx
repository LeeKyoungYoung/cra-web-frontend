import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <div className={styles['container']}>
      <div>회원가입 페이지입니다</div>
      <div>추후 디자인 나오면 개발 예정</div>
    </div>
  );
}

// const RegisterPage: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleRegister = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email || !password || !confirmPassword) {
//       alert('모든 필드를 입력해주세요.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert('비밀번호가 일치하지 않습니다.');
//       return;
//     }

//     // 회원가입 처리 로직 추가
//     console.log('회원가입 시도: ', email, password);
//   };

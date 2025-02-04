<<<<<<< HEAD
import React from 'react';
import SignUpForm from '~/components/Auth/SignUp/SignUpForm';

function RegisterPage() {
  return (
    <div>
      <SignUpForm />
    </div>
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AlertModal from '~/components/Modal/Alert/AlertModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10rem 0;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  line-height: 59px;
  margin-bottom: 70px;
  color: var(--color-bright-text);
`;

const RegisterForm = styled.form`
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: var(--color-white);
  border-radius: 1rem;
  padding: 4rem 0;

  label {
    color: var(--color-dark-text);
    font-family: 'Pretendard SemiBold';
    margin: 1rem 0 0 0.5rem;
    text-align: start;
    display: block;
    width: 80%;
    transform: translateY(1rem);
  }

  input {
    background-color: var(--color-white);
    border: 1px solid var(--color-dark-stroke);
    border-radius: 0.5rem;
    width: 80%;
    margin-bottom: 2rem;
    padding: 1.5rem 1rem;
  }
`;

const SubmitBtn = styled.button`
  background-color: var(--color-primary) !important;
  color: var(--color-white);
  font-family: 'Pretendard Bold';
  width: 80%;
  text-align: center;
  padding: 1.1rem 0;
  margin: 4rem 0 2rem 0;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

function RegisterPage() {
  const navigate = useNavigate();

  // State for storing input values
  const [formData, setFormData] = useState({
    id: '',
    pw: '',
    studentNum: '',
    name: '',
    CRA: '',
    github: '',
    talk: '',
    code: '',
  });
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    // 모든 필드가 채워졌는지 확인
    for (let key in formData) {
      if (!formData[key as keyof typeof formData]) {
        // 타입 단언 추가
        setIsModalOpen(true); // 모달 열기
        return;
      }
    }

    // If all fields are filled, navigate to the next page
    setError('');
    navigate('/welcome');
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <RegisterForm onSubmit={handleSubmit}>
        <label htmlFor="id">아이디</label>
        <input
          type="text"
          name="id"
          id="id"
          placeholder="아이디를 입력하세요."
          value={formData.id}
          onChange={handleChange}
        />

        <label htmlFor="pw">비밀번호</label>
        <input
          type="password"
          name="pw"
          id="pw"
          placeholder="비밀번호를 입력하세요."
          value={formData.pw}
          onChange={handleChange}
        />

        <label htmlFor="studentNum">학번</label>
        <input
          type="text"
          name="studentNum"
          id="studentNum"
          placeholder="학번을 입력하세요."
          value={formData.studentNum}
          onChange={handleChange}
        />

        <label htmlFor="name">이름</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="이름을 입력하세요."
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="CRA">CRA 기수</label>
        <input
          type="text"
          name="CRA"
          id="CRA"
          placeholder="CRA 기수를 입력하세요."
          value={formData.CRA}
          onChange={handleChange}
        />

        <label htmlFor="github">GitHub 주소</label>
        <input
          type="text"
          name="github"
          id="github"
          placeholder="GitHub 주소를 입력하세요."
          value={formData.github}
          onChange={handleChange}
        />

        <label htmlFor="talk">나의 한마디</label>
        <input
          type="text"
          name="talk"
          id="talk"
          placeholder="나의 한마디를 입력하세요."
          value={formData.talk}
          onChange={handleChange}
        />

        <label htmlFor="code">가입코드</label>
        <input
          type="text"
          name="code"
          id="code"
          placeholder="가입코드를 입력하세요."
          value={formData.code}
          onChange={handleChange}
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <SubmitBtn type="submit">확인</SubmitBtn>
      </RegisterForm>
      {isModalOpen && <AlertModal closeModal={() => setIsModalOpen(false)} />}
    </Container>
>>>>>>> 9d7c5cfe4efc8572800f4709c09d5c4d939f5694
  );
}

export default RegisterPage;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
  return (
    <Container>
      <Title>회원가입</Title>
      <RegisterForm>
        <label htmlFor="id">아이디</label>
        <input
          type="text"
          name="id"
          id="id"
          placeholder="아이디를 입력하세요."
        />

        <label htmlFor="pw">비밀번호</label>
        <input
          type="text"
          name="pw"
          id="pw"
          placeholder="비밀번호를 입력하세요."
        />

        <label htmlFor="studentNum">학번</label>
        <input
          type="text"
          name="studentNum"
          id="studentNum"
          placeholder="학번를 입력하세요."
        />

        <label htmlFor="Name">이름</label>
        <input
          type="text"
          name="Name"
          id="Name"
          placeholder="이름을 입력하세요."
        />

        <label htmlFor="CRA">CRA 기수</label>
        <input
          type="text"
          name="CRA"
          id="CRA"
          placeholder="CRA 기수를 입력하세요."
        />

        <label htmlFor="github">GitHub 주소</label>
        <input
          type="text"
          name="github"
          id="github"
          placeholder="GitHub 주소를 입력하세요."
        />

        <label htmlFor="talk">나의 한마디</label>
        <input
          type="text"
          name="talk"
          id="talk"
          placeholder="나의 한마디를 입력하세요."
        />

        <label htmlFor="code">가입코드</label>
        <input
          type="text"
          name="code"
          id="code"
          placeholder="가입코드를 입력하세요."
        />

        <SubmitBtn
          onClick={(e) => {
            e.preventDefault();
            navigate('/welcome');
          }}
        >
          확인
        </SubmitBtn>
      </RegisterForm>
    </Container>
  );
}

export default RegisterPage;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '~/store/authStore';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  line-height: 59px;
  margin-bottom: 3rem;
  color: var(--color-bright-text);
`;

const RegisterForm = styled.form`
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);
  border-radius: 1rem;
  padding: 3rem 10rem;
  width: 100%;
  max-width: 1600px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;

  label {
    color: var(--color-dark);
    font-family: 'Pretendard SemiBold';
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    user-select: none;
  }
  input {
    width: 100%;
    background-color: var(--color-white);
    color: var(--color-dark-stroke);
    border: 1px solid var(--color-dark-stroke);
    border-radius: 0.5rem;
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

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [githubId, setGithubId] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [term, setTerm] = useState('');
  const { signUp } = useAuthStore();
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      signUp({
        username,
        password,
        email,
        name,
        githubId,
        studentNumber: Number(studentNumber),
        term,
      });
      alert('회원가입 성공');
      navigate('/register/welcome');
    } catch (error) {
      console.error('SignUp Handling Error: ', error);
      alert('회원가입입 실패');
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <RegisterForm onSubmit={handleSignUp}>
        <Input>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="유저네임을 입력하세요."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Input>
        <Input>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="비밀번호을 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Input>
        <Input>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="이메일을 입력하세요 (ex. cra@cra.com)."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Input>
        <Input>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="성함을 입력하세요 (ex. 이경영)."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Input>
        <Input>
          <label htmlFor="githubId">GithubId</label>
          <input
            type="text"
            placeholder="GitHub 아이디를 입력하세요 (ex. min06150315)."
            value={githubId}
            onChange={(e) => setGithubId(e.target.value)}
          />
        </Input>
        <Input>
          <label htmlFor="StudentNumber">Email</label>
          <input
            type="text"
            placeholder="학번을 입력하세요 (ex. 22300265)."
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
          />
        </Input>
        <Input>
          <label htmlFor="term">Term</label>
          <input
            type="text"
            placeholder="기수를 입력하세요 (ex. 24-2)."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </Input>
        <SubmitBtn>확인</SubmitBtn>
      </RegisterForm>
    </Container>
  );
}

export default SignUpForm;

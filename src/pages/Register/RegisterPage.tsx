import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertModal from '~/components/Modal/Alert/AlertModal.tsx';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1600px;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  line-height: 59px;
  margin-bottom: 70px;
  color: var(--color-bright-text);
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const RegisterForm = styled.form`
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 600px;
  background-color: var(--color-white);
  border-radius: 1rem;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;

  label {
    color: var(--color-dark);
    font-family: 'Pretendard SemiBold';
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    user-select: none;
  }

  input {
    background-color: var(--color-white);
    color: var(--color-dark-stroke);
    border: 1px solid var(--color-dark-stroke);
    border-radius: 0.5rem;
    padding: 1.5rem 1rem;

    @media (max-width: 480px) {
      padding: 1.2rem 0.8rem;
    }
  }
`;

const SubmitBtn = styled.button`
  background-color: var(--color-primary) !important;
  color: var(--color-white);
  width: 20%;
  max-width: 400px;
  font-family: 'Pretendard Bold';
  font-size: 1.25rem;
  text-align: center;
  padding: 0.9rem 0;
  margin-top: 2rem;
  border: none;
  border-radius: 0.75rem;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <Input>
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="아이디를 입력하세요."
            value={formData.id}
            onChange={handleChange}
          />
        </Input>
        <Input>
          <label htmlFor="pw">비밀번호</label>
          <input
            type="password"
            name="pw"
            id="pw"
            placeholder="비밀번호를 입력하세요."
            value={formData.pw}
            onChange={handleChange}
          />{' '}
        </Input>

        <Input>
          <label htmlFor="studentNum">학번</label>
          <input
            type="text"
            name="studentNum"
            id="studentNum"
            placeholder="학번을 입력하세요."
            value={formData.studentNum}
            onChange={handleChange}
          />{' '}
        </Input>

        <Input>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="이름을 입력하세요."
            value={formData.name}
            onChange={handleChange}
          />{' '}
        </Input>

        <Input>
          <label htmlFor="CRA">CRA 기수</label>
          <input
            type="text"
            name="CRA"
            id="CRA"
            placeholder="CRA 기수를 입력하세요."
            value={formData.CRA}
            onChange={handleChange}
          />{' '}
        </Input>

        <Input>
          <label htmlFor="github">GitHub 주소</label>
          <input
            type="text"
            name="github"
            id="github"
            placeholder="GitHub 주소를 입력하세요."
            value={formData.github}
            onChange={handleChange}
          />{' '}
        </Input>

        <Input>
          <label htmlFor="talk">나의 한마디</label>
          <input
            type="text"
            name="talk"
            id="talk"
            placeholder="나의 한마디를 입력하세요."
            value={formData.talk}
            onChange={handleChange}
          />{' '}
        </Input>

        <Input>
          <label htmlFor="code">가입코드</label>
          <input
            type="text"
            name="code"
            id="code"
            placeholder="가입코드를 입력하세요."
            value={formData.code}
            onChange={handleChange}
          />{' '}
        </Input>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <SubmitBtn type="submit">확인</SubmitBtn>
      </RegisterForm>
      {isModalOpen && <AlertModal closeModal={() => setIsModalOpen(false)} />}
    </Container>
  );
}

export default RegisterPage;

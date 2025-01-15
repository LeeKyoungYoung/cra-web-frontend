import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15rem 0;
`;

const Title = styled.h2`
  line-height: 59px;
  color: var(--color-bright-text);
  font-size: 40px;
  text-align: center;
  margin-bottom: 70px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 700px;
  background-color: var(--color-white);
  border-radius: 1rem;
  padding: 3rem 4rem;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  label {
    color: var(--color-dark);
    font-family: 'Pretendard SemiBold';
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    transform: translateY(1.25rem);
    user-select: none;
  }
  input {
    width: 100%;
    background-color: var(--color-white);
    color: var(--color-dark-stroke);
    border: 1px solid var(--color-dark-stroke);
    border-radius: 0.5rem;
    padding: 1.5rem 1rem;
    transform: translateX(-2rem);
  }
`;

const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 1.5rem;
  font-family: 'Pretendard Bold';
  border-radius: 1rem;
  border: none;
  padding: 1rem 0;
  margin: 4rem 0 2rem 0;
  user-select: none;
  cursor: pointer;
`;

function IDSearchPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>아이디 찾기</Title>
      <Form>
        <Input>
          <label htmlFor="studentNum">학번</label>
          <input
            type="text"
            name="studentNum"
            id="studentNum"
            placeholder="학번을 입력하세요."
          />
        </Input>
        <Input>
          <label htmlFor="studentNum">이름</label>
          <input
            type="text"
            name="studentNum"
            id="studentNum"
            placeholder="학번을 입력하세요."
          />
        </Input>
        <Input>
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="이메일을 입력하세요."
          />
        </Input>
        <Submit
          onClick={(e) => {
            e.preventDefault();
            navigate('/idsearch/complete');
          }}
        >
          확인
        </Submit>
      </Form>
    </Container>
  );
}

export default IDSearchPage;

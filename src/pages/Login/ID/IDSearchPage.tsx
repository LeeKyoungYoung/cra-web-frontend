import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem;
`;

const Form = styled.form`
  background-color: var(--color-white);
  width: 70%;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  label {
    margin: 2rem 0rem 0rem 2rem;
    font-family: 'Pretendard SemiBold';
    transform: translateY(1.5rem);
  }
  input {
    border: 1px solid var(--color-dark-stroke);
    background-color: var(--color-white);
    padding: 1.5rem 1rem;
    border-radius: 0.5rem;
    color: var(--color-dark-stroke);
  }
`;

const Submit = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: 1rem;
  border: none;
  font-family: 'Pretendard Bold';
  padding: 1rem 10rem;
`;

function IDSearchPage() {
  return (
    <Container>
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
        <Submit>확인</Submit>
      </Form>
    </Container>
  );
}

export default IDSearchPage;

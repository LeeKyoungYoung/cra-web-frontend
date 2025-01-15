import React from 'react';
import BlueCheck from '~/assets/images/Blue-Check.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
`;

const Img = styled.img`
  user-select: none;
`;

const Title = styled.p`
  color: var(--color-primary);
  font-size: 2.5rem;
  font-family: 'Pretendard Bold';
  margin: 3rem 0;
`;

const Content = styled.div`
  width: 47.5rem;
  background-color: var(--color-white);
  color: var(--color-dark-text);
  font-size: 1.5625rem;
  font-family: 'Pretendard Bold';
  border-radius: 1rem;
  padding: 1rem 2rem;
`;

const Context = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

const Black = styled.p`
  color: var(--color-dark-text);
`;

const SkyBlue = styled.p`
  color: var(--color-primary);
`;

const Buttons = styled.div`
  display: flex;
  gap: 2rem;
`;

const PWResetBtn = styled.button`
  margin: 5rem 0 20rem 0;
  background-color: var(--color-white);
  border: 2px solid var(--color-primary);
  border-radius: 1rem;
  color: var(--color-primary);
  font-size: 2rem;
  padding: 1rem 5rem;
  font-family: 'Pretendard Bold';
  cursor: pointer;
`;

const LoginBtn = styled.button`
  margin: 5rem 0 20rem 0;
  background-color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 1rem;
  color: #ffffff;
  font-size: 2rem;
  padding: 1rem 5rem;
  font-family: 'Pretendard Bold';
  cursor: pointer;
`;

function IDSearchCompletePage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Img src={BlueCheck} />
      <Title>아이디 찾기 완료</Title>
      <Content>
        <Context>
          <Black>가입일</Black>
          <Black>2025. 01. 15</Black>
        </Context>
        <Context>
          <SkyBlue>아이디</SkyBlue>
          <SkyBlue>dnwnchlrkd206</SkyBlue>
        </Context>
      </Content>
      <Buttons>
        <PWResetBtn onClick={() => navigate('/pwsearch/reset')}>
          비밀번호 재설정
        </PWResetBtn>
        <LoginBtn onClick={() => navigate('/login')}>로그인 바로하기</LoginBtn>
      </Buttons>
    </Container>
  );
}

export default IDSearchCompletePage;

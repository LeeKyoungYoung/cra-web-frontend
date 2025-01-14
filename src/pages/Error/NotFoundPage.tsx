import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CrangE from '~/assets/images/404_Crang.png';
import WhiteVector from '~/assets/images/Vector-white.png';
import SkyBlueVector from '~/assets/images/Vector-skyblue.png';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* user-select: none; */
  padding: 10rem;
  p {
    color: #2cb4db;
  }
`;

const Status = styled.div`
  display: flex;
`;

const StatusNum = styled.p`
  font-family: 'Archivo Black';
  font-size: 16.7rem;
`;

const Img = styled.img`
  width: 15.75rem;
  height: 14.875rem;
  margin-top: 4rem;
`;

const Content = styled.div`
  p {
    font-weight: bold;
    text-align: center;
  }
  margin-bottom: 5rem;
`;

const Title = styled.p`
  font-size: 1.875rem;
  margin-bottom: 3rem;
`;

const Context = styled.p`
  color: #8c8c8c !important;
  font-size: 1.5625rem;
`;

const Buttons = styled.div`
  button {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    border-radius: 0.5rem;
    padding: 0.75rem 2rem;
    margin: 0 1.25rem;
  }
`;

const MainBtn = styled.button`
  color: #2cb4db;
  border: 2px solid #2cb4db;
`;

const PrevBtn = styled.button`
  background-color: #2cb4db;
  color: #ffffff;
  border: 2px solid #2cb4db;
`;

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Status>
        <StatusNum>4</StatusNum>
        <Img src={CrangE} />
        <StatusNum>4</StatusNum>
      </Status>
      <Content>
        <Title>죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.</Title>
        <Context>존재하지 않는 주소를 입력하셨거나,</Context>
        <Context>
          요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        </Context>
      </Content>
      <Buttons>
        <MainBtn>
          메인으로 <img src={SkyBlueVector} />
        </MainBtn>

        <PrevBtn onClick={() => navigate(-1)}>
          이전으로 <img src={WhiteVector} />
        </PrevBtn>
      </Buttons>
    </Container>
  );
}

export default NotFoundPage;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CrangE from '~/assets/images/404_Crang.png';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const Content = styled.div``;

const Buttons = styled.div``;

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
        <p>죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.</p>
        <p>존재하지 않는 주소를 입력하셨거나,</p>
        <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
      </Content>
      <Buttons>
        <Link to="/intro">메인으로 &gt;</Link>
        <button>이전으로 &gt;</button>
      </Buttons>
    </Container>
  );
}

export default NotFoundPage;

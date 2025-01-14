import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10rem;
`;

const Status = styled.div``;

const Content = styled.div``;

const Buttons = styled.div``;

function NotFoundPage() {
  return (
    <Container>
      <Status>404</Status>
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

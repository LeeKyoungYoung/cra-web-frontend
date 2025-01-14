import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10rem;
`;

export default function RegisterPage() {
  return (
    <Container>
      <div>회원가입 페이지입니다</div>
      <div>추후 디자인 나오면 개발 예정</div>
    </Container>
  );
}

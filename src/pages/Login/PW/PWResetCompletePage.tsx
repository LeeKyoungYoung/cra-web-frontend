import { useNavigate } from 'react-router-dom';
import BlueCheck from '~/assets/images/Blue-Check.png';
import styled from 'styled-components';

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

const Content = styled.p`
  color: var(--color-bright-text);
  font-size: 1.5625rem;
  font-family: 'Pretendard Bold';
  padding: 0.25rem 0;
`;

const LoginBtn = styled.button`
  margin: 5rem 0 20rem 0;
  background-color: var(--color-primary);
  border: none;
  border-radius: 1rem;
  color: #ffffff;
  font-size: 2rem;
  padding: 1rem 5rem;
  font-family: 'Pretendard Bold';
  user-select: none;
  cursor: pointer;
`;

function PWResetCompletePage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Img src={BlueCheck} />
      <Title>비밀번호 변경 완료</Title>
      <Content>크랑이님(dncnwhlrkd206)의 비밀번호가 변경되었습니다.</Content>
      <LoginBtn onClick={() => navigate('/login')}>로그인 바로하기</LoginBtn>
    </Container>
  );
}

export default PWResetCompletePage;

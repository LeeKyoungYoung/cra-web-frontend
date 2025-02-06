import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-family: 'Pretendard Medium';
  width: 80%;
  background-color: rgb(255, 255, 255);
  border-radius: 1rem;
`;

function AdminHome() {
  return (
    <Container>
      <p>어드민 홈 페이지입니다.</p>
      <p>환영합니다.</p>
    </Container>
  );
}

export default AdminHome;

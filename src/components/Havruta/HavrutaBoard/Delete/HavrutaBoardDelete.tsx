import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteHavrutaBoards } from '~/api/havruta/havrutaBoard.ts';
import styled from 'styled-components';

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: darkred;
  }
`;

function HavrutaBoardDelete() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const havrutaBoardId = Number(id);

  const mutation = useMutation({
    mutationFn: (havrutaBoardId: number) => deleteHavrutaBoards(havrutaBoardId),
    onSuccess: async () => {
      alert('하브루타 게시물 삭제 성공');
      navigate('/havruta');
    },
    onError: (error) => {
      console.error('하브루타 게시물 삭제 실패: ', error);
      alert('하브루타 게시물 삭제 실패');
    },
  });

  const HandleDelete = () => {
    const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');
    if (confirmDelete) {
      mutation.mutate(havrutaBoardId);
    }
  };

  return <DeleteButton onClick={HandleDelete}>삭제</DeleteButton>;
}

export default HavrutaBoardDelete;

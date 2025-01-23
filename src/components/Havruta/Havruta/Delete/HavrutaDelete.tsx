import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteHavruta } from '~/api/havruta/havruta';
import { QUERY_KEY } from '~/api/queryKey';
import { Havruta } from '~/models/Havruta';
import styled from 'styled-components';

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #da2b2b;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function HavrutaDelete({ id }: { id: number }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: number) => deleteHavruta(id),
    onSuccess: async () => {
      alert(' 하브루타 삭제 성공');
      queryClient.setQueryData<Havruta[]>(
        QUERY_KEY.havruta.havrutas(),
        (oldData) => {
          if (!oldData) return [];
          return oldData.filter((havruta) => havruta.id !== id);
        },
      );

      await queryClient.invalidateQueries({
        queryKey: QUERY_KEY.havruta.havrutas(),
      });
    },
    onError: (error) => {
      console.error('하브루타 삭제 실패', error);
      alert('하브루타 삭제 실패');
    },
  });

  const handleDelete = () => {
    const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');
    if (confirmDelete) {
      mutation.mutate(id);
    }
  };

  return <DeleteButton onClick={handleDelete}>삭제</DeleteButton>;
}

export default HavrutaDelete;

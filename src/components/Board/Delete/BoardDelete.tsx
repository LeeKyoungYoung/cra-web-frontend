import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBoards } from '../../../api/board';
import './BoardDelete.css';
import { QUERY_KEY } from '~/api/queryKey';

export default function BoardDelete({
  id,
  category,
}: {
  id: number;
  category: number;
}) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteBoards(id),
    onSuccess: () => {
      alert('게시글 삭제 성공');
      // 게시글 목록 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.board.boards(category),
      });
      queryClient.refetchQueries({
        queryKey: QUERY_KEY.board.boards(category),
      });
    },
    onError: (error) => {
      console.error('게시글 삭제 실패:', error);
      alert('게시글 삭제 실패');
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate(id);
  };

  return (
    <button className="delete-button" onClick={handleDelete}>
      삭제
    </button>
  );
}

import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBoards } from '../../../api/board';
import './BoardDelete.css';

export default function BoardDelete({ id }: { id: number }) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteBoards(id),
    onSuccess: () => {
      alert('게시글 삭제 성공');
      // 게시글 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ['boards'] });
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

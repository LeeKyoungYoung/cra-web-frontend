import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deleteBoards } from '../../../api/board';
import { QUERY_KEY } from '~/api/queryKey';
import styles from './BoardDelete.module.css';
import { MdDeleteOutline } from 'react-icons/md';

export default function BoardDelete({
  id,
  category,
}: {
  id: number;
  category: number;
}) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteBoards(id),
    onSuccess: async () => {
      alert('게시글 삭제 성공');
      await navigate(-1);
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
      <div className={styles['delete-button']} onClick={handleDelete}>
        <MdDeleteOutline size={24} />
      </div>
  );
}

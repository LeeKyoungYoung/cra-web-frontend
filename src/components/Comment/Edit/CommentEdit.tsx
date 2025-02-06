import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateComments } from '~/api/comment.ts';
import { QUERY_KEY } from '~/api/queryKey.ts';

export default function CommentEdit({
  id,
  onClose,
}: {
  id: number;
  onClose: () => void; // 수정 완료 또는 취소 시 호출되는 함수
}) {
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  // 댓글 수정 요청을 보내는 mutation
  const mutation = useMutation({
    mutationFn: (newComment: { id: number; content: string }) =>
      updateComments(newComment),
    onSuccess: () => {
      alert('댓글 수정 성공');
      queryClient.invalidateQueries(QUERY_KEY.comment.commentsById(id)); // 댓글 데이터 쿼리 무효화
      onClose(); // 수정 성공 시 수정 모드 종료
    },
    onError: (error) => {
      console.error('댓글 수정 실패:', error);
      alert('댓글 수정 실패');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ id, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="댓글 수정 내용을 입력하세요"
      />
      <button type="submit">저장</button>
      <button type="button" onClick={onClose}>
        취소
      </button>
    </form>
  );
}

import React, { useState } from 'react';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { createChildComments, createComments } from '~/api/comment';
import { Comment } from '~/models/Comment';
import { QUERY_KEY } from '~/api/queryKey';
import styles from './CommentWrite.module.css';

export default function CommentWrite({
  parentId,
}: {
  parentId: number | undefined;
}) {
  const currentUrl = window.location.href;
  const id = currentUrl.substring(currentUrl.lastIndexOf('/') + 1); // URL 파라미터에서 id 가져오기

  const boardId = Number(id); // id를 숫자로 변환
  const [formData, setFormData] = useState({
    userId: 1,
    boardId: boardId,
    content: '',
  });
  const queryClient = useQueryClient();

  const mutationFn = !parentId
    ? (newComment: Comment) => createComments(newComment, boardId)
    : (newComment: Comment) =>
        createChildComments(newComment, boardId, parentId);

  const handleSuccess = async () => {
    try {
      alert('댓글 작성 성공');

      // 폼 데이터 초기화
      setFormData({
        userId: 1,
        boardId: boardId,
        content: '',
      });

      const queryKeys = [
        QUERY_KEY.comment.commentsById(boardId),
        QUERY_KEY.comment.commentsCountById(boardId),
      ];

      // invalidate 및 refetch 병렬 처리
      await Promise.all(
        queryKeys.flatMap((key) => [
          queryClient.invalidateQueries({ queryKey: key }),
          queryClient.refetchQueries({ queryKey: key }),
        ]),
      );
    } catch (error) {
      console.error('댓글 갱신 실패:', error);
      alert('댓글 갱신 중 오류가 발생했습니다.');
    }
  };

  const mutation = useMutation({
    mutationFn,
    onSuccess: handleSuccess,
    onError: (error) => {
      console.error('댓글 작성 실패:', error);
      alert('댓글 작성 실패');
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className={styles.commentWriteContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputField}>
          <input
            type="text"
            id="content"
            name="content"
            placeholder="댓글을 작성하세요"
            value={formData.content}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          댓글쓰기
        </button>
      </form>
    </div>
  );
}

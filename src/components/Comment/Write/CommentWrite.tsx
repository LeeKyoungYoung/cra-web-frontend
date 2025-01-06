import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createComments } from '../../../api/comment';
import { Comment } from '~/models/Comment';
import { useParams } from 'react-router-dom';
import styles from './CommentWrite.module.css'; // Import the styles

export default function CommentWrite() {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 id 가져오기
  const boardId = Number(id); // id를 숫자로 변환
  const [formData, setFormData] = useState({
    userId: 1,
    boardId: boardId,
    content: '',
  });

  const mutation = useMutation({
    mutationFn: (newComment: Comment) => createComments(newComment),
    onSuccess: () => {
      alert('댓글 작성 성공');
      setFormData({
        userId: 1,
        boardId: boardId,
        content: '',
      });
    },
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
        <input
          type="text"
          id="content"
          name="content"
          placeholder="댓글을 작성하세요"
          value={formData.content}
          onChange={handleInputChange}
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>
          댓글 작성
        </button>
      </form>
    </div>
  );
}

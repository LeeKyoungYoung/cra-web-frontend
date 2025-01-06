import React, { useState } from 'react';
import { Comment } from '~/models/Comment';
import CommentDelete from '../Delete/CommentDelete';
import CommentEdit from '../Edit/CommentEdit';
import styles from './Item.module.css';

export default function CommentItem({ comment }: { comment: Comment }) {
  // 수정 모드 여부를 관리하는 상태
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ? (
        <CommentEdit
          id={comment.id as number}
          onClose={() => setIsEditing(false)} // 수정 완료 후 수정 모드를 종료
        />
      ) : (
        <>
          <div>{comment.id}</div>
          <div>{comment.content}</div>
          <div>
            <button
              onClick={() => setIsEditing(true)}
              className={styles['delete-button']}
            >
              수정
            </button>
            <CommentDelete id={comment.id as number} />
          </div>
        </>
      )}
    </div>
  );
}

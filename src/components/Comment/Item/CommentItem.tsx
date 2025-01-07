import React, { useState } from 'react';
import { Comment } from '~/models/Comment';
import CommentDelete from '../Delete/CommentDelete';
import CommentEdit from '../Edit/CommentEdit';
import styles from './Item.module.css';

import CommentWrite from '../Write/CommentWrite';
export default function CommentItem({
  comment,
  isRoot,
}: {
  comment: Comment;
  isRoot: Boolean;
}) {
  const [showReplyForm, setShowReplyForm] = useState(false);
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
          {isRoot && (
            <div onClick={() => setShowReplyForm((prev) => !prev)}>
              답글 작성
            </div>
          )}
          {showReplyForm && <CommentWrite parentId={comment.id} />}
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

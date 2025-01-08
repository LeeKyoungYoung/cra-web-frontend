import React, { useState } from 'react';
import { Comment } from '~/models/Comment';
import CommentDelete from '../Delete/CommentDelete';
import CommentEdit from '../Edit/CommentEdit';
import styles from './CommentItem.module.css';

import CommentWrite from '../Write/CommentWrite';
import Divider from '~/components/Common/Divider';
import HeightSpacer from '~/components/Common/HeightSpacer';
import WidthSpacer from '~/components/Common/WidthSpacer';
import { dateFormat } from '~/utils/dateForm';

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
      <Divider />
      <HeightSpacer space={20} />
      <div className={styles['item-container']}>
        <WidthSpacer space={14} />
        {!isRoot && <WidthSpacer space={46} />}
        {isEditing ? (
          <CommentEdit
            id={comment.id as number}
            onClose={() => setIsEditing(false)} // 수정 완료 후 수정 모드를 종료
          />
        ) : (
          <div className={styles['item-content']}>
            <div className={styles['comment-user']}>
              <div className={styles['comment-profile-image']} />
              <div className={styles['comment-id']}>{comment.id}</div>
            </div>
            <div className={styles['comment-content']}>{comment.content}</div>

            <div className={styles['comment-footer']}>
              <div>{dateFormat(comment.createdAt)}</div>
              <div
                onClick={() => setIsEditing(true)}
                className={styles['delete-button']}
              >
                수정
              </div>
              {isRoot && (
                <div
                  onClick={() => setShowReplyForm((prev) => !prev)}
                  className={styles['comment-reply']}
                >
                  답글 작성
                </div>
              )}
              <CommentDelete id={comment.id as number} />
            </div>
            {showReplyForm && <CommentWrite parentId={comment.id} />}
          </div>
        )}
      </div>
      <HeightSpacer space={14} />
    </div>
  );
}

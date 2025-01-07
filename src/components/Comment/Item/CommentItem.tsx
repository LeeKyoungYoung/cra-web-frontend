import React, { useState } from 'react';
import { Comment } from '~/models/Comment';
import CommentWrite from '../Write/CommentWrite';
export default function CommentItem({ comment, isRoot }: { comment: Comment, isRoot: Boolean }) {
  const [showReplyForm, setShowReplyForm] = useState(false);


  return (
    <div>
      <div>{comment.id}</div>
      <div>{comment.content}</div>
      {isRoot && <div onClick={() => setShowReplyForm((prev) => !prev)}>답글 작성</div>}
      {showReplyForm && <CommentWrite parentId={comment.id}/>}
    </div>
  );
}

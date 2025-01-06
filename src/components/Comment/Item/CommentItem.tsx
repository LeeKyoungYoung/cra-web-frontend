import React from 'react';
import { Comment } from '~/models/Comment';
export default function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div>
      <div>{comment.id}</div>
      <div>{comment.content}</div>
    </div>
  );
}

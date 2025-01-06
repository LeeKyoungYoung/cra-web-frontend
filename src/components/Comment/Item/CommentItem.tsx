import React from 'react';
import { Comment } from '~/models/Comment';
import CommentDelete from '../Delete/CommentDelete';
import { CATEGORY } from '~/constants/category';
export default function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div>
      <div>{comment.id}</div>
      <div>{comment.content}</div>
      <CommentDelete id={comment.id} />
    </div>
  );
}

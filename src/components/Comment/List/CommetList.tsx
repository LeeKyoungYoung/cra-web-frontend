import React, { useState } from 'react';
import { CATEGORY_STRINGS } from '~/constants/category_strings';
import CommentItem from '../Item/CommentItem';
import { Comment } from '~/models/Comment';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/api/queryKey';
import { getCommentsByCategory } from '~/api/comment';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function CommentList({ id }: { id: number }) {
  const commentsQuery = useQuery<Comment[]>({
    queryKey: QUERY_KEY.comment.commentsById(id),
    queryFn: async () => getCommentsByCategory(id),
  });

  let content;

  if (commentsQuery.isLoading) {
    content = <div className="loading">데이터를 불러오는 중입니다...</div>;
  } else if (commentsQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (commentsQuery.isSuccess) {
    console.log(commentsQuery.data);
    content = commentsQuery.data.map((comment) => (
      <div>
        <CommentItem key={comment.id} comment={comment} isRoot={true} />
        대댓글
        {comment.commentList.map((childComment) => (
          <CommentItem
            key={childComment.id}
            comment={childComment}
            isRoot={false}
          />
        ))}
        ---
      </div>
    ));
  }

  return <div>{content}</div>;
}
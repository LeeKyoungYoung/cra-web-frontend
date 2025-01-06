import React from 'react';
import { CATEGORY_STRINGS } from '~/constants/category_strings';
import CommentItem from '../Item/CommentItem';
import { Comment } from '~/models/Comment';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/api/queryKey';
import { getCommentsByCategory } from '~/api/comment';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function CommentList({ id }: { id: number }) {
  const CommentsQuery = useQuery<Comment[]>({
    queryKey: QUERY_KEY.comment.commentsById(id),
    queryFn: async () => getCommentsByCategory(id),
  });

  let content;

  if (CommentsQuery.isLoading) {
    content = <div className="loading">데이터를 불러오는 중입니다...</div>;
  } else if (CommentsQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (CommentsQuery.isSuccess) {
    content = CommentsQuery.data.map((comment) => (
      <CommentItem key={comment.id} comment={comment} />
    ));
  }

  return <div>{content}</div>;
}
import React from 'react';
import { Link } from 'react-router-dom';
import BoardDetail from '../../../components/Board/Detail/BoardDetail';
import { CATEGORY } from '../../../constants/category';
import CommentWrite from '~/components/Comment/Write/CommentWrite';

export default function NoticeDetailPage() {
  return <BoardDetail category={CATEGORY.NOTICE} />;
}

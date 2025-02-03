import React from 'react';
import { Link } from 'react-router-dom';
import BoardDetail from '../../../components/Board/Detail/BoardDetail';
import { CATEGORY } from '../../../constants/category';
import CommentWrite from '~/components/Comment/Write/CommentWrite';

export default function NoticeDetailPage() {
  console.log('NoticeDetailPage 렌더링');
  return <BoardDetail category={CATEGORY.NOTICE} />;
}

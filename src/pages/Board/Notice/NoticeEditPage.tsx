import React from 'react';
import { Link } from 'react-router-dom';
import BoardEdit from '../../../components/Board/BoardEdit';
import { CATEGORY } from '../../../constants/category';

export default function NoticeEditPage() {
  return <BoardEdit category={CATEGORY.NOTICE} />;
}

import React from 'react';
import { Link } from 'react-router-dom';
import BoardDetail from '../../../components/Board/Detail/BoardDetail';
import { CATEGORY } from '../../../constants/category';

export default function HavrutaDetailPage() {
  return <BoardDetail category={CATEGORY.HAVRUTA} />;
}

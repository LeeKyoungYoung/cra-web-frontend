import React from 'react';
import { Link } from 'react-router-dom';
import BoardList from '../../../components/Board/BoardList';
import { CATEGORY } from '../../../constants/category';

export default function NoticeList() {
  return <BoardList category={CATEGORY.NOTICE} />;
}

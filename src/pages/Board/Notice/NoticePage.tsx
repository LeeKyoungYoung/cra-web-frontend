import React from 'react';
import { Link } from 'react-router-dom';
import BoardList from '../../../components/Board/BoardList';
import { CATEGORY } from '../../../constants/category';

export default function NoticePage() {
  return (
    <div>
      <BoardList category={CATEGORY.NOTICE} />
      <Link to="/notice/write">Write</Link>
    </div>
  );
}

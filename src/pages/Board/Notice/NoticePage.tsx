import React from 'react';
import { Link } from 'react-router-dom';
import BoardList from '~/components/Board/List/BoardList';
import { CATEGORY } from '~/constants/category';

export default function NoticePage() { 
  return <BoardList category={CATEGORY.NOTICE} />;
}

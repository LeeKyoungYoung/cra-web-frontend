import React from 'react';
import BoardContainer from '~/components/Board/BoardContainer';
import { CATEGORY } from '~/constants/category';
export default function NoticePage() {
  return <BoardContainer category={CATEGORY.NOTICE} />;
}

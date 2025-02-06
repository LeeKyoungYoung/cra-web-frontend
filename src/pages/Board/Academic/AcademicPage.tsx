import React from 'react';
import { CATEGORY } from '~/constants/category';
import BoardContainer from '~/components/Board/BoardContainer.tsx';

export default function AcademicPage() {
  return <BoardContainer category={CATEGORY.ACADEMIC} />;
}

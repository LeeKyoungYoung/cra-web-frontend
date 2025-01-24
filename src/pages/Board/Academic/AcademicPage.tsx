import React from 'react';
import { CATEGORY } from '../../../constants/category';
import BoardContainer from '~/components/Board/BoardContainer';

export default function AcademicPage() {
  return <BoardContainer category={CATEGORY.ACADEMIC} />;
}

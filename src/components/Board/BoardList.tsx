import React from 'react';
import { CATEGORY_STRINGS } from '../../constants/category_strings';

export default function BoardList({ category }: { category: number }) {
  return <div>{CATEGORY_STRINGS[category]}게시글 리스트</div>;
}

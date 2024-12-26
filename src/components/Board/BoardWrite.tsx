import React from 'react';
import { CATEGORY_STRINGS } from '../../constants/category_strings';

export default function BoardWrite({ category }: { category: number }) {
  return <div>{CATEGORY_STRINGS[category]}게시글 작성</div>;
}

import React from 'react';
import { CATEGORY_STRINGS } from '../../../constants/category_strings';

export default function BoardEdit({ category }: { category: number }) {
  return <div>{CATEGORY_STRINGS[category]}게시글 수정</div>;
}

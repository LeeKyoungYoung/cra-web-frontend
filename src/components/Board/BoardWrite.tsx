import React from 'react';
import { CATEGORY_STRINGS } from '../../constants/category_strings';
import { Board } from '../../models/Board';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../api/queryKey';

export default function BoardWrite({ category }: { category: number }) {
  return (
    <div>
      <div>{CATEGORY_STRINGS[category]}게시글 작성</div>
      <p>학번</p>
      <input type="number" id="userId" name="userId" />
      <p>제목</p>
      <input type="text" id="title" name="title" />
      <p>내용</p>
      <input type="text" id="content" name="content" />
      <p>카테고리</p>
      <input type="text" id="category" name="category" />
      <p>이미지 주소</p>
      <input type="text" id="imageUrls" name="imageUrls" />
      <input type="submit" value="제출" />
    </div>
  );
}

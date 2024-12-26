// 어드민이 Book 정보를 입력하는데 사용되는 페이지

import React from 'react';
import { Link } from 'react-router-dom';
import BoardWrite from '../../../components/Board/BoardWrite';
import { CATEGORY } from '../../../constants/category';

export default function BookWritePage() {
  return <BoardWrite category={CATEGORY.BOOK} />;
}

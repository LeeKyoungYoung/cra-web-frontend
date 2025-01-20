import React from 'react';
import { Link } from 'react-router-dom';
import BoardWrite from '../../../components/Board/Write/BoardWrite';
import { CATEGORY } from '../../../constants/category';

export default function ItemWritePage() {
  return <BoardWrite category={CATEGORY.ITEM} />;
}

import React from 'react';
import { Link } from 'react-router-dom';
import BoardDetail from '../../../components/Board/Detail/BoardDetail';
import { ITEMCATEGORY } from '~/constants/itemCategory';

export default function ItemDetailPage() {
  return <BoardDetail category={ITEMCATEGORY.ITEM} />;
}

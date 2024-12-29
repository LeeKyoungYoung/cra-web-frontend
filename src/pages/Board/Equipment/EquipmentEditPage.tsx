import React from 'react';
import { Link } from 'react-router-dom';
import BoardEdit from '../../../components/Board/Edit/BoardEdit';
import { CATEGORY } from '../../../constants/category';

export default function EquipmentEditPage() {
  return <BoardEdit category={CATEGORY.EQUIPMENT} />;
}

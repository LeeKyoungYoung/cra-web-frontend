import React from 'react';
import { Link } from 'react-router-dom';
import BoardWrite from '../../../components/Board/BoardWrite';
import { CATEGORY } from '../../../constants/category';

export default function EquipmentWritePage() {
  return <BoardWrite category={CATEGORY.EQUIPMENT} />;
}

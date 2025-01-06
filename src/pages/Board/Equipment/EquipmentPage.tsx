import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BoardList from '../../../components/Board/List/BoardList';
import { CATEGORY } from '../../../constants/category';
import styles from './EquipmentPage.module.css';

export default function EquipmentPage() {
  return <BoardList category={CATEGORY.EQUIPMENT} />;
}

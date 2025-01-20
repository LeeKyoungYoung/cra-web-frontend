import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BoardList from '../../../components/Board/List/BoardList';
import { CATEGORY } from '../../../constants/category';
import styles from './ItemPage.module.css';

export default function ItemPage() {
  return <BoardList category={CATEGORY.ITEM} />;
}

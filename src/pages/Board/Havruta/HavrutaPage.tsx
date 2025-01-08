import React, { useState } from 'react';
import BoardList from '../../../components/Board/List/BoardList';
import { CATEGORY } from '../../../constants/category';
import styles from './HavrutaPage.module.css';

export default function HavrutaPage() {
  return <BoardList category={CATEGORY.HAVRUTA} />;
}

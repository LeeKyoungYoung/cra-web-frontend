import React, { useState } from 'react';
import BoardList from '../../../components/Board/List/BoardList';
import { CATEGORY } from '../../../constants/category';
import styles from './HavrutaPage.module.css';

export default function HavrutaPage() {
  return (
    <div className={styles.container}>
      <h1>Havruta 게시판</h1>

      <BoardList category={CATEGORY.HAVRUTA} />
    </div>
  );
}

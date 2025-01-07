import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BoardList from '~/components/Board/List/BoardList';
import { CATEGORY } from '../../../../constants/category';
import styles from './BookPage.module.css';

export default function BookPage() {
  return (
      <BoardList category={CATEGORY.BOOK} />
  );
}

import React from 'react';
import { CATEGORY_STRINGS_EN } from '~/constants/category_strings_en';
import { Board } from '../../../models/Board';
import { Link } from 'react-router-dom';
import styles from './BoardItem.module.css';

export default function BoardItem({
  board,
  category,
}: {
  board: Board;
  category: number;
}) {
  return (
    <Link
      to={`${CATEGORY_STRINGS_EN[category]}/view/${board.id}`}
      className={styles['temp-link']}
    >
      <div className={styles['board-item-container']}>
        <div>
          <div className={styles['board-user-name']}>{board.userId}</div>
          <div className={styles['board-title']}>
            <div className={styles['board-title']}>{board.title}</div>
          </div>
        </div>
        <div className={styles['board-content']}>{board.content}</div>
      </div>
    </Link>
  );
}

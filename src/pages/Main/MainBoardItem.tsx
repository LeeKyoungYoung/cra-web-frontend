import React from 'react';
import { Board } from '~/models/Board';
import { Link } from 'react-router-dom';
import styles from './MainBoardItem.module.css';

export default function BoardItem({ board }: { board: Board }) {
  return (
    <Link
      to={`/${board.category}/view/${board.id}`}
      className={styles['temp-link']}
    >
      <div className={styles['board-item-container']}>
        <div>
          <div className={styles['board-title']}>{board.title}</div>
          <div className={styles['board-created']}>
            {board.createdAt
              ? new Date(board.createdAt).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })
              : '날짜 없음'}
          </div>
        </div>
      </div>
    </Link>
  );
}

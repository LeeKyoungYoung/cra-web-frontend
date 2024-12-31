import React from 'react';
import { CATEGORY_STRINGS } from '../../../constants/category_strings';
import BoardItem from '../Item/BoardItem';
import { Board } from '../../../models/Board';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../../api/queryKey';
import { getBoardsByCategory } from '../../../api/board';
import { Link } from 'react-router-dom';
import BoardDelete from '../Delete/BoardDelete';
import styles from './BoardList.module.css';

export default function BoardList({ category }: { category: number }) {
  const boardsQuery = useQuery<Board[]>({
    queryKey: QUERY_KEY.board.boards(category),
    queryFn: async () => getBoardsByCategory(category),
  });

  let content;

  if (boardsQuery.isLoading) {
    content = <div className="loading">데이터를 불러오는 중입니다...</div>;
  } else if (boardsQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (boardsQuery.isSuccess) {
    content = boardsQuery.data.map((board, index) => {
      if (board.id === undefined) return null;
      return (
        <div key={`board-${board.id}`}>
          <div className={styles['board-wrapper']}>
            <BoardItem board={board} />
            {/* <BoardDelete id={board.id} category={category} /> */}
          </div>
          {index < boardsQuery.data.length - 1 && (
            <div className={styles['divider']}></div>
          )}
        </div>
      );
    });
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{CATEGORY_STRINGS[category]} 게시판</h2>
      <div className={styles['board-list']}>{content}</div>
      <div className={styles['board-list-footer']}>
        <div className={styles['spacer']}></div>
        <div className={styles['pagenations']}>
          <div
            className={`${styles['pagenations-elipse']} ${styles['pagenations-elipse-unselected']}`}
          ></div>
          <div
            className={`${styles['pagenations-elipse']} ${styles['pagenations-elipse-unselected']}`}
          >
            1
          </div>
          <div
            className={`${styles['pagenations-elipse']} ${styles['pagenations-elipse-selected']}`}
          >
            2
          </div>
          <div
            className={`${styles['pagenations-elipse']} ${styles['pagenations-elipse-unselected']}`}
          >
            3
          </div>
          <div
            className={`${styles['pagenations-elipse']} ${styles['pagenations-elipse-unselected']}`}
          >
            4
          </div>
          <div
            className={`${styles['pagenations-elipse']} ${styles['pagenations-elipse-unselected']}`}
          >
            5
          </div>
          <div className={styles['pagenations-elipse']}>...</div>
          <div
            className={`${styles['pagenations-elipse']} ${styles['pagenations-elipse-unselected']}`}
          ></div>
        </div>
        <Link className={styles['write-link']} to="./write">
          글쓰기
        </Link>
      </div>
    </div>
  );
}

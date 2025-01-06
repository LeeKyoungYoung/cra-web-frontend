import React from 'react';
import { CATEGORY_STRINGS } from '~/constants/category_strings';
import MainBoardItem from './MainBoardItem';
import { Board } from '~/models/Board';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/api/queryKey';
import { getBoardsByCategory } from '~/api/board';
import styles from './MainBoardList.module.css';

export default function MainBoardList({ category }: { category: number }) {
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
            <MainBoardItem board={board} />
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
      <div className={styles['divider']}></div>
      <div className={styles['board-list']}>{content}</div>
      <div className={styles['divider']}></div>
    </div>
  );
}

import React from 'react';
import { CATEGORY_STRINGS } from '../../../constants/category_strings';
import BoardItem from '../Item/BoardItem';
import { Board } from '../../../models/Board';
import { UseQueryResult } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Pagination from '~/components/Pagination/Pagination';
import styles from './BoardList.module.css';

interface BoardListProps {
  category: number;
  boardsQuery: UseQueryResult<Board[], unknown>;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function BoardList({
  category,
  boardsQuery,
  totalPages,
  currentPage,
  onPageChange,
}: BoardListProps) {
  const renderBoardContent = () => {
    if (boardsQuery.isLoading)
      return <div className="loading">데이터를 불러오는 중입니다...</div>;

    if (boardsQuery.isError)
      return <div className="error">에러가 발생했습니다!</div>;

    if (boardsQuery.isSuccess) {
      return boardsQuery.data
        .filter((board) => board.id !== undefined)
        .map((board, index) => (
          <div key={`board-${board.id}`}>
            <div className={styles['board-wrapper']}>
              <BoardItem board={board} />
            </div>
            {index < boardsQuery.data.length - 1 && (
              <div className={styles.divider}></div>
            )}
          </div>
        ));
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{CATEGORY_STRINGS[category]} 게시판</h2>
      <div className={styles.boardList}>{renderBoardContent()}</div>
      <div className={styles['board-list-footer']}>
        <div className={styles['spacer']}></div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
        <Link className={styles['write-link']} to="./write">
          글쓰기
        </Link>
      </div>
    </div>
  );
}

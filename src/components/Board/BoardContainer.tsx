import React, { useState } from 'react';
import { Board } from '~/models/Board';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/api/queryKey';
import { getBoardsByCategory, getBoardCountByCategory } from '~/api/board';
import BoardList from './List/BoardList';

function BoardContainer({ category }: { category: number }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const boardsCountQuery = useQuery<Board[]>({
    queryKey: QUERY_KEY.board.boardsCount(category),
    queryFn: async () => getBoardCountByCategory(category),
  });

  const boardsQuery = useQuery<Board[]>({
    queryKey: QUERY_KEY.board.boards(category, currentPage),
    queryFn: async () => getBoardsByCategory(category, currentPage),
  });

  const totalItems = boardsCountQuery.data?.length ?? 0;

  const totalPage = Math.ceil(totalItems / itemsPerPage);
  return (
    <BoardList
      category={category}
      boardsQuery={boardsQuery}
      totalPages={totalPage}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
}

export default BoardContainer;

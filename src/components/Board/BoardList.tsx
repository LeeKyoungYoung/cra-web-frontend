import React from 'react';
import { CATEGORY_STRINGS } from '../../constants/category_strings';
import BoardItem from './BoardItem';
import { Board } from '../../models/Board';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../api/queryKey';
import { getBoardsByCategory } from '../../api/board';

export default function BoardList({ category }: { category: number }) {
  const boardsQuery = useQuery<Board[]>({
    queryKey: QUERY_KEY.board.boards(category),
    queryFn: async () => getBoardsByCategory(category),
  });

  let content;

  if (boardsQuery.isLoading) {
    content = <div>데이터를 불러오는 중입니다...</div>;
  } else if (boardsQuery.isError) {
    content = <div>에러가 발생했습니다!</div>;
  } else if (boardsQuery.isSuccess) {
    content = boardsQuery.data.map((board) => (
      <BoardItem key={board.id} board={board} />
    ));
  }

  return (
    <div>
      <div>{CATEGORY_STRINGS[category]}게시글 리스트</div>
      {content}
    </div>
  );
}

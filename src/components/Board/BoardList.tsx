import React from 'react';
import { CATEGORY_STRINGS } from '../../constants/category_strings';
import BoardItem from './BoardItem';
import { Board } from '../../models/Board';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../api/queryKey';
import { getBoardsByCategory } from '../../api/board';
import { Link } from 'react-router-dom';
import BoardDelete from './BoardDelete';

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
    content = boardsQuery.data.map((board) => {
      if (board.id === undefined) return null; // id가 undefined일 경우 렌더링하지 않음
      return (
        <div key={`board-${board.id}`}>
          <BoardItem board={board} />
          <BoardDelete id={board.id} />
        </div>
      );
    });
  }

  return (
    <div>
      <div>{CATEGORY_STRINGS[category]}게시글 리스트</div>
      {content}
      <Link to="./write">새 게시글 작성</Link>
    </div>
  );
}

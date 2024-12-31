import React from 'react';
import { Board } from '../../../models/Board';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../../api/queryKey';
import { getBoardById } from '../../../api/board';
import { useParams } from 'react-router-dom';
import BoardDetailItem from '../Item/BoardDetailItem';

export default function BoardDetail({ category }: { category: number }) {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 id 가져오기
  const boardId = Number(id); // id를 숫자로 변환

  const boardQuery = useQuery<Board>({
    queryKey: QUERY_KEY.board.boardById(boardId),
    queryFn: async () => getBoardById(boardId),
  });

  let content;

  if (boardQuery.isLoading) {
    content = <div className="loading">데이터를 불러오는 중입니다...</div>;
  } else if (boardQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (boardQuery.isSuccess) {
    const board = boardQuery.data;
    console.log(board);
    return (
      <div>
        <BoardDetailItem board={board} category={category} />
      </div>
    );
  }

  return <div>{content}</div>;
}

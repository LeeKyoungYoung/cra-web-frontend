import React from 'react';
import { CATEGORY_STRINGS } from '../../../constants/category_strings';
import { Board } from '../../../models/Board';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../../api/queryKey';
import { getBoardById } from '../../../api/board';
import { useParams } from 'react-router-dom';

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
        <h2>{CATEGORY_STRINGS[category]} 게시물 자세히 보기</h2>{' '}
        {/* category 값을 잘 출력하는지 확인 */}
        <div>
          <p>{board.userId}</p>
          <p>{board.title}</p>
          <p>{board.content}</p>
          <p>{board.category}</p>
          <p>{board.like}</p>
          <p>{board.view}</p>
          <p>{board.imageUrls}</p>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

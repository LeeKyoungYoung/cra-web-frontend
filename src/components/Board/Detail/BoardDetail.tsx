import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { QUERY_KEY } from '~/api/queryKey.ts';
import { Board } from '~/models/Board.ts';
import { getBoardById } from '~/api/board.ts';
import BoardDetailItem from './BoardDetailItem.tsx';
import { getCommentsCountByCategory } from '~/api/comment.ts';
import styles from './BoardDetail.module.css';

export default function BoardDetail({ category }: { category: number }) {
  const currentUrl = window.location.href;
  const id = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
  const boardId = Number(id);

  const navigate = useNavigate();
  const hasNavigated = useRef(false); // 🚀 navigate 실행 여부를 저장

  const boardQuery = useQuery<Board>({
    queryKey: QUERY_KEY.board.boardById(boardId),
    queryFn: async () => getBoardById(boardId),
    retry: false,
  });

  const commentCountQuery = useQuery<number>({
    queryKey: QUERY_KEY.comment.commentsCountById(boardId),
    queryFn: async () => getCommentsCountByCategory(boardId),
    retry: false,
  });

  useEffect(() => {
    if (hasNavigated.current) return; // ✅ 이미 이동했다면 추가 실행 X

    if (boardQuery.isError) {
      const error = boardQuery.error;

      // AxiosError 체크를 먼저 하고
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        // 404 에러인 경우
        if (status === 404) {
          hasNavigated.current = true;
          navigate('/not-found');
          return;
        }

        // 403 에러인 경우
        if (status === 403) {
          hasNavigated.current = true;
          navigate('/forbidden');
          return;
        }

        // 500 에러인 경우
        if (status === 500) {
          hasNavigated.current = true;
          navigate('/internal-server-error', {
            state: { message: error.message },
          });
          return;
        }
      }

      // 그 외의 일반적인 에러는 마지막에 처리
      hasNavigated.current = true;
      navigate('/internal-server-error', {
        state: {
          message: error instanceof Error ? error.message : 'Unknown error',
        },
      });
      return;
    }
  });

  if (boardQuery.isFetching || commentCountQuery.isFetching) {
    return <div>로딩 중...</div>;
  }

  if (boardQuery.isSuccess && commentCountQuery.isSuccess) {
    return (
      <div className={styles['full-width']}>
        <BoardDetailItem
          board={boardQuery.data}
          category={category}
          commentCount={commentCountQuery.data}
        />
      </div>
    );
  }

  return <div>데이터를 불러올 수 없습니다.</div>;
}

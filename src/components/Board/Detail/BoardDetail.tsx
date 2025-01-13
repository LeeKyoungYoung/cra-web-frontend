import React from 'react';
import { Board } from '../../../models/Board';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../../api/queryKey';
import { getBoardById } from '../../../api/board';
import { useParams } from 'react-router-dom';
import BoardDetailItem from './BoardDetailItem';
import BoardDelete from '../Delete/BoardDelete';
import CommentList from '~/components/Comment/List/CommetList';
import styles from './BoardDetail.module.css';
import { getCommentsCountByCategory } from '~/api/comment';
import { dateFormat } from '~/utils/dateForm';

export default function BoardDetail({ category }: { category: number }) {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 id 가져오기
  const boardId = Number(id); // id를 숫자로 변환

  const boardQuery = useQuery<Board>({
    queryKey: QUERY_KEY.board.boardById(boardId),
    queryFn: async () => getBoardById(boardId),
  });

  const commentCountQuery = useQuery<number>({
    queryKey: QUERY_KEY.comment.commentsCountById(boardId),
    queryFn: async () => getCommentsCountByCategory(boardId),
  });

  let content;

  if (boardQuery.isLoading || commentCountQuery.isLoading) {
    content = <div className="loading">데이터를 불러오는 중입니다...</div>;
  } else if (boardQuery.isError || commentCountQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (boardQuery.isSuccess && commentCountQuery.isSuccess) {
    const board = boardQuery.data;
    console.log(board);
    return (
      <div className={styles['full-width']}>
        <BoardDetailItem
          board={board}
          category={category}
          commentCount={commentCountQuery.data}
        />
      </div>
    );
  }

  return <div>{content}</div>;
}

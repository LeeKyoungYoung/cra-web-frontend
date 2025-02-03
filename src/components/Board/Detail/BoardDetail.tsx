import React from 'react';
import { Board } from '../../../models/Board';
import { CATEGORY_STRINGS_EN } from '~/constants/category_strings_en';
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
import { useMatch, useRouter } from '@tanstack/react-router';

export default function BoardDetail({ category }: { category: number }) {
  const currentUrl = window.location.href; // 현재 경로 가져오기
  const id = currentUrl.substring(currentUrl.lastIndexOf('/') + 1); // 마지막 '/' 뒤의 숫자 가져오기

  const boardId = Number(id);

  if (isNaN(boardId)) {
    return <div style={{ padding: '10rem' }}>Invalid ID</div>;
  }

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

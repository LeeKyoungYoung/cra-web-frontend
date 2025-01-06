import React from 'react';
import { Board } from '../../../models/Board';
import { CATEGORY_STRINGS } from '../../../constants/category_strings';
import { CATEGORY_STRINGS_EN } from '../../../constants/category_strings_en';
import { Link } from 'react-router-dom';
import styles from './BoardDetailItem.module.css';
import CommentWrite from '~/components/Comment/Write/CommentWrite';

export default function BoardDetailItem({
  board,
  category,
}: {
  board: Board;
  category: number;
}) {
  return (
    <div className={styles['detail-container']}>
      <h2>{CATEGORY_STRINGS[category]} 게시글 자세히 보기</h2>{' '}
      {/* category 값을 잘 출력하는지 확인 */}
      <div className={styles['detail-content']}>
        <p>UserID: {board.userId}</p>
        <p>Title: {board.title}</p>
        <p>Content: {board.content}</p>
        <p>Category: {CATEGORY_STRINGS[board.category]}</p>
        <p>Like: {board.like}</p>
        <p>View: {board.view}</p>
        <p>ImageURLs: {board.imageUrls}</p>
      </div>
      <div>
        <Link
          to={`/${CATEGORY_STRINGS_EN[category]}/edit/${board.id}`}
          className={styles['edit-link']}
        >
          게시물 수정하기
        </Link>
      </div>
      <div>
        <CommentWrite />
      </div>
    </div>
  );
}

import React from 'react';
import { Board } from '../../../models/Board';
import { CATEGORY_STRINGS } from '../../../constants/category_strings';
import { CATEGORY_STRINGS_EN } from '../../../constants/category_strings_en';
import { Link } from 'react-router-dom';
import styles from './BoardDetailItem.module.css';
import CommentWrite from '~/components/Comment/Write/CommentWrite';
import CommentList from '~/components/Comment/List/CommetList';

export default function BoardDetailItem({
  board,
  category,
}: {
  board: Board;
  category: number;
}) {
  return (
    <>
      <div className={styles['detail-container']}>
        <div>
          <div className={styles['fix-button']}>
            <button className={styles['login']}>
              <Link
                to={`/${CATEGORY_STRINGS_EN[category]}/edit/${board.id}`}
                className={styles['link']}
              >
                수정하기
              </Link>
            </button>
          </div>
          <div className={styles['detail-content']}>
            <header className={styles['title']}>
              <h3>{CATEGORY_STRINGS[category]} 게시판</h3>
            </header>
            <body
              className={`${styles['divide-line']} ${styles['content-body']}`}
            >
              <nav className={styles['nav']}>
                <span>작성자 | {board.userId}</span>
                <span>작성일 | 2025 년 00 월 00 일</span>
              </nav>
              <h1 className={styles['contetn-title']}>{board.title}</h1>
              <p>{board.content}</p>
              <div className={styles['comment-count']}>
                <p>View: {board.view}</p>
                <p>Like: {board.like}</p>
                <p>comment count: 3</p>
              </div>
            </body>
            <footer className={styles['divide-line']}>
              <CommentWrite />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
//밑에거 다 잘됨.
{
  /* <p>Category: {CATEGORY_STRINGS[board.category]}</p>
          <p>Like: {board.like}</p>
          <p>View: {board.view}</p>
          <p>ImageURLs: {board.imageUrls}</p> */
}

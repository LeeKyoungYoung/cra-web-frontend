import React from 'react';
import { Board } from '../../../models/Board';
import { CATEGORY_STRINGS } from '../../../constants/category_strings';
import { CATEGORY_STRINGS_EN } from '../../../constants/category_strings_en';
import { Link } from 'react-router-dom';
import styles from './BoardDetailItem.module.css';
import CommentWrite from '~/components/Comment/Write/CommentWrite';
import CommentList from '~/components/Comment/List/CommetList';
import BoardDelete from '../Delete/BoardDelete';

export default function BoardDetailItem({
  board,
  category,
}: {
  board: Board;
  category: number;
}) {
  return (
    <div className={styles['detail-container']}>
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
        <div className={styles['title']}>
          {CATEGORY_STRINGS[category]} 게시판
        </div>
        <div className={styles['divide-line']} />
        <div className={styles['content-body']}>
          <div className={styles['nav']}>
            <div>
              <span className={styles['nav-title']}>작성자 | </span>
              <span className={styles['nav-content']}>{board.userId}</span>
            </div>
            <div>
              <span className={styles['nav-title']}>작성일 | </span>
              <span className={styles['nav-content']}>2025-00-00</span>
            </div>
          </div>
          <div className={styles['contetn-title']}>{board.title}</div>
          <p>{board.content}</p>
          <div className={styles['comment-count']}>
            <p>View: {board.view}</p>
            <p>Like: {board.like}</p>
            <p>comment count: 3</p>
          </div>
        </div>
        <div className={styles['divide-line']}>
          <BoardDelete id={board.id!} category={category} />
          <CommentList id={board.id!} />
          <CommentWrite parentId={undefined} />
        </div>
      </div>
    </div>
  );
}

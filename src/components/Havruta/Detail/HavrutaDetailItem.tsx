import React from 'react';
import { CATEGORY_STRINGS } from '../../../constants/category_strings';
import { CATEGORY_STRINGS_EN } from '../../../constants/category_strings_en';
import { Link } from 'react-router-dom';
import styles from './HavrutaDetailItem.module.css';
import CommentWrite from '~/components/Comment/Write/CommentWrite';
import CommentList from '~/components/Comment/List/CommetList';
import BoardDelete from '../Delete/BoardDelete';
import HeightSpacer from '~/components/Common/HeightSpacer';
import Divider from '~/components/Common/Divider';
import { dateFormat } from '~/utils/dateForm';
import { Havruta } from '~/models/Havruta';

export default function havrutaDetailItem({
  havruta,
  category,
  commentCount,
}: {
  havruta: Havruta;
  category: number;
  commentCount: number;
}) {
  return (
    <div className={styles['detail-container']}>
      <div className={styles['fix-button']}>
        <BoardDelete id={havruta.id!} category={category} />
        <button className={styles['login']}>
          <Link
            to={`/${CATEGORY_STRINGS_EN[category]}/edit/${havruta.id}`}
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
        <Divider />
        <div className={styles['content-body']}>
          <div className={styles['nav']}>
            <div>
              <span className={styles['nav-title']}>작성자 | </span>
              <span className={styles['nav-content']}>{havruta.userId}</span>
            </div>
            <div>
              <span className={styles['nav-title']}>작성일 | </span>
              <span className={styles['nav-content']}>
                {dateFormat(havruta.createdAt)}
              </span>
            </div>
          </div>
          <div className={styles['content-title']}>{havruta.className}</div>
          <p className={styles['board-content']}>{havruta.content}</p>
          <div className={styles['comment-count']}>
            <span>조회 {havruta.view}</span>
            <span>좋아요 {havruta.likeCount}1</span>
            <span>댓글 {commentCount}</span>
          </div>
        </div>
        <div className={styles['footer']}>
          <HeightSpacer space={20} />
          <CommentList id={havruta.id!} />
          <CommentWrite parentId={undefined} />
        </div>
      </div>
    </div>
  );
}

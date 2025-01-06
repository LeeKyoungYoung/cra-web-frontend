import React from 'react';
import { CATEGORY_STRINGS } from '../../../constants/category_strings';
import CommentItem from '../Item/CommentItem';
import { Comment } from '../../../models/Comment';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../../api/queryKey';
import { getCommentsByCategory } from '../../../api/Comment';
import { Link } from 'react-router-dom';
import CommentDelete from '../Delete/CommentDelete';
import styles from './CommentList.module.css';

export default function CommentList({ category }: { category: number }) {
  const CommentsQuery = useQuery<Comment[]>({
    queryKey: QUERY_KEY.Comment.Comments(category),
    queryFn: async () => getCommentsByCategory(category),
  });

  let content;

  if (CommentsQuery.isLoading) {
    content = <div className="loading">데이터를 불러오는 중입니다...</div>;
  } else if (CommentsQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (CommentsQuery.isSuccess) {
    content = CommentsQuery.data.map((Comment, index) => {
      if (Comment.id === undefined) return null;
      return (
        <div key={`Comment-${Comment.id}`}>
          <div className={styles['Comment-wrapper']}>
            <CommentItem Comment={Comment} />
            {/* <CommentDelete id={Comment.id} category={category} /> */}
          </div>
          {index < CommentsQuery.data.length - 1 && (
            <div className={styles['divider']}></div>
          )}
        </div>
      );
    });
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{CATEGORY_STRINGS[category]} 게시판</h2>
      <div className={styles['Comment-list']}>{content}</div>
      <div className={styles['Comment-list-footer']}>
        <div className={styles['spacer']}></div>
        <div className={styles['pagenations']}>
          <div
            className={`${styles['pagenations-elipse']} ${styles['pagenations-elipse-unselected']}`}
          ></div>
          <div
            className={`${styles['pagenations-elipse']} ${styles['pagenations-elipse-unselected']}`}
          >
            1
          </div>
          <div
            className={`${styles['pagenations-elipse']} ${styles['pagenations-elipse-selected']}`}
          >
            2
          </div>
          <div
            className={`${styles['pagenations-elipse']} ${styles['pagenations-elipse-unselected']}`}
          >
            3
          </div>
          <div
            className={`${styles['pagenations-elipse']} ${styles['pagenations-elipse-unselected']}`}
          >
            4
          </div>
          <div
            className={`${styles['pagenations-elipse']} ${styles['pagenations-elipse-unselected']}`}
          >
            5
          </div>
          <div className={styles['pagenations-elipse']}>...</div>
          <div
            className={`${styles['pagenations-elipse']} ${styles['pagenations-elipse-unselected']}`}
          ></div>
        </div>
        <Link className={styles['write-link']} to="./write">
          글쓰기
        </Link>
      </div>
    </div>
  );
}

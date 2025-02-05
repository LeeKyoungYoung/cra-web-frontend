import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Board } from '~/models/Board.ts';
import { createBoardsView, getBoardById } from '~/api/board.ts';
import { CATEGORY_STRINGS } from '~/constants/category_strings.ts';
import { CATEGORY_STRINGS_EN } from '~/constants/category_strings_en.ts';
import CommentWrite from '~/components/Comment/Write/CommentWrite.tsx';
import CommentList from '~/components/Comment/List/CommetList.tsx';
import BoardDelete from '~/components/Board/Delete/BoardDelete.tsx';
import HeightSpacer from '~/components/Common/HeightSpacer.tsx';
import Divider from '~/components/Common/Divider.tsx';
import { dateFormat } from '~/utils/dateForm.ts';
import { Viewer } from '@toast-ui/react-editor';
import { FaRegEdit } from 'react-icons/fa';
import styles from './BoardDetailItem.module.css';

export default function BoardDetailItem({
  board,
  category,
  commentCount,
}: {
  board: Board;
  category: number;
  commentCount: number;
}) {
  const [viewCnt, setViewCnt] = useState(board.view);

  useEffect(() => {
    const viewed = localStorage.getItem(`viewed_${board.id}`);
    if (!viewed) {
      createBoardsView(board.id as number)
        .then(() => {
          localStorage.setItem(`viewed_${board.id}`, 'true');
          return getBoardById(board.id as number);
        })
        .then((updatedBoard) => {
          setViewCnt(updatedBoard.view as number);
          console.log('Updated view count:', updatedBoard.view);
        })
        .catch((err) => console.error('조회수 업데이트 실패:', err));
    }
  }, [board.id]);

  return (
    <div className={styles['detail-container']}>
      <div className={styles['detail-content']}>
        <div className={styles['title']}>
          {CATEGORY_STRINGS[category]} 게시판
        </div>
        <Divider />
        <div className={styles['content-body']}>
          <div className={styles['nav']}>
            <div>
              <span className={styles['nav-title']}>작성자 | </span>
              <span className={styles['nav-content']}>{board.userId}</span>
            </div>
            <div>
              <span className={styles['nav-title']}>작성일 | </span>
              <span className={styles['nav-content']}>
                {dateFormat(board.createdAt)}
              </span>
            </div>
            <div className={styles['fix-button']}>
              <Link
                to={`/${CATEGORY_STRINGS_EN[category]}/edit/${board.id}`}
                className={styles['link']}
              >
                <FaRegEdit size={22} />
              </Link>
              <BoardDelete id={board.id!} category={category} />
            </div>
          </div>
          <div className={styles['content-title']}>{board.title}</div>
          <div className={styles['board-content']}>
            <Viewer initialValue={board.content} />
          </div>
          <div className={styles['comment-count']}>
            <span>조회 {viewCnt}</span>
            <span>좋아요 {board.like}1</span>
            <span>댓글 {commentCount}</span>
          </div>
        </div>
        <div className={styles['footer']}>
          <HeightSpacer space={20} />
          <CommentList id={board.id!} />
          <CommentWrite parentId={undefined} />
        </div>
      </div>
    </div>
  );
}

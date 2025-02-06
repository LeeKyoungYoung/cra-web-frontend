import { Link } from 'react-router-dom';
import { dateFormat } from '~/utils/dateForm.ts';
import { HavrutaBoard } from '~/models/Havruta.ts';
import CommentWrite from '~/components/Comment/Write/CommentWrite.tsx';
import CommentList from '~/components/Comment/List/CommetList.tsx';
import HavrutaBoardDelete from '~/components/Havruta/HavrutaBoard/Delete/HavrutaBoardDelete.tsx';
import HeightSpacer from '~/components/Common/HeightSpacer.tsx';
import Divider from '~/components/Common/Divider.tsx';
import styles from './HavrutaBoardDetailItem.module.css';

export default function HavrutaBoardDetailItem({
  havrutaBoard,
  commentCount,
}: {
  havrutaBoard: HavrutaBoard;
  commentCount: number;
}) {
  return (
    <div className={styles['detail-container']}>
      <div className={styles['fix-button']}>
        <HavrutaBoardDelete />
        <button className={styles['login']}>
          <Link
            to={`/havruta/edit/${havrutaBoard.id}`}
            className={styles['link']}
          >
            수정하기
          </Link>
        </button>
      </div>
      <div className={styles['detail-content']}>
        <div className={styles['title']}>
          {havrutaBoard.className} ({havrutaBoard.professor})
        </div>
        <Divider />
        <div className={styles['content-body']}>
          <div className={styles['nav']}>
            <div>
              <span className={styles['nav-title']}>작성자 | </span>
              <span className={styles['nav-content']}>
                {havrutaBoard.userId}
              </span>
            </div>
            <div>
              <span className={styles['nav-title']}>작성일 | </span>
              <span className={styles['nav-content']}>
                {dateFormat(havrutaBoard.createdAt)}
              </span>
            </div>
          </div>
          <div className={styles['content-title']}>{havrutaBoard.title}</div>
          <p className={styles['board-content']}>{havrutaBoard.content}</p>
          <div className={styles['comment-count']}>
            <span>조회 {havrutaBoard.view}</span>
            <span>좋아요 {havrutaBoard.likeCount}1</span>
            <span>댓글 {commentCount}</span>
          </div>
        </div>
        <div className={styles['footer']}>
          <HeightSpacer space={20} />
          <CommentList id={havrutaBoard.id!} />
          <CommentWrite parentId={undefined} />
        </div>
      </div>
    </div>
  );
}

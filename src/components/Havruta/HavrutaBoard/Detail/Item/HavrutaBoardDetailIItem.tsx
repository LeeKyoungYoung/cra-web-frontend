import { Link } from 'react-router-dom';
import CommentWrite from '~/components/Comment/Write/CommentWrite';
import CommentList from '~/components/Comment/List/CommetList';
import HeightSpacer from '~/components/Common/HeightSpacer';
import Divider from '~/components/Common/Divider';
import { dateFormat } from '~/utils/dateForm';
import { HavrutaBoard } from '~/models/Havruta';
import HavrutaBoardDelete from '~/components/Havruta/HavrutaBoard/Delete/HavrutaBoardDelete';
import styles from './HavrutaBoardDetailItem.module.css';
import { FaRegEdit } from 'react-icons/fa';
import { Viewer } from '@toast-ui/react-editor';

export default function HavrutaBoardDetailItem({
  havrutaBoard,
  commentCount,
}: {
  havrutaBoard: HavrutaBoard;
  commentCount: number;
}) {
  return (
    <div className={styles['detail-container']}>
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
            <div className={styles['fix-button']}>
              <Link
                to={`/havruta/edit/${havrutaBoard.id}`}
                className={styles['link']}
              >
                <FaRegEdit size={22} />
              </Link>
              <HavrutaBoardDelete />
            </div>
          </div>
          <div className={styles['content-title']}>{havrutaBoard.title}</div>
          <div className={styles['board-content']}>
            <Viewer initialValue={havrutaBoard.content} />
          </div>
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

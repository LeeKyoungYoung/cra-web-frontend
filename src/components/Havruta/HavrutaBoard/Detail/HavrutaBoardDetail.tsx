import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/api/queryKey.ts';
import { getCommentsCountByCategory } from '~/api/comment.ts';
import { getHavrutaBoardById } from '~/api/havruta/havrutaBoard.ts';
import { HavrutaBoard } from '~/models/Havruta.ts';
import HavrutaBoardDetailItem from './Item/HavrutaBoardDetailIItem.tsx';
import styles from './HavrutaBoardDetail.module.css';

export default function HavrutaBoardDetail() {
  const currentUrl = window.location.href;
  const id = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
  const havrutaId = Number(id);

  const havrutaQuery = useQuery<HavrutaBoard>({
    queryKey: QUERY_KEY.havrutaBoard.havrutaBoardById(havrutaId),
    queryFn: async () => getHavrutaBoardById(havrutaId),
  });

  const commentCountQuery = useQuery<number>({
    queryKey: QUERY_KEY.comment.commentsCountById(havrutaId),
    queryFn: async () => getCommentsCountByCategory(havrutaId),
  });

  let content;

  if (havrutaQuery.isLoading || commentCountQuery.isLoading) {
    content = <div className="loading">데이터를 불러오는 중입니다...</div>;
  } else if (havrutaQuery.isError || commentCountQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (havrutaQuery.isSuccess && commentCountQuery.isSuccess) {
    const havrutaBoard = havrutaQuery.data;
    console.log(havrutaBoard);
    return (
      <div className={styles['full-width']}>
        <HavrutaBoardDetailItem
          havrutaBoard={havrutaBoard}
          commentCount={commentCountQuery.data}
        />
      </div>
    );
  }

  return <div>{content}</div>;
}

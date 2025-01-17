import React from 'react';
import { Board } from '../../../models/Board';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../../api/queryKey';
import { useParams } from 'react-router-dom';
import CommentList from '~/components/Comment/List/CommetList';
import styles from './HavrutaDetail.module.css';
import { getCommentsCountByCategory } from '~/api/comment';
import { dateFormat } from '~/utils/dateForm';
import { getHavrutaViewById } from '~/api/havruta';
import { Havruta } from '~/models/Havruta';

export default function HavrutaDetail({ category }: { category: number }) {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 id 가져오기
  const havrutaId = Number(id); // id를 숫자로 변환

  const havrutaQuery = useQuery<Havruta>({
    queryKey: QUERY_KEY.havruta.havrutaViewById(havrutaId),
    queryFn: async () => getHavrutaViewById(havrutaId),
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
    const havruta = havrutaQuery.data;
    console.log(havruta);
    return (
      <div className={styles['full-width']}>
        <HavrutaDetailItem
          havruta={havruta}
          category={category}
          commentCount={commentCountQuery.data}
        />
      </div>
    );
  }

  return <div>{content}</div>;
}

import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { QUERY_KEY } from '~/api/queryKey.ts';
import { getHavrutaBoardById } from '~/api/havruta/havrutaBoard.ts';
import { getCommentsCountByCategory } from '~/api/comment.ts';
import { HavrutaBoard } from '~/models/Havruta.ts';
import HavrutaBoardDetailItem from './Item/HavrutaBoardDetailIItem.tsx';
import styles from './HavrutaBoardDetail.module.css';

export default function HavrutaBoardDetail() {
  const currentUrl = window.location.href;
  const id = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
  const havrutaId = Number(id);

  const navigate = useNavigate();
  const hasNavigated = useRef(false);

  const havrutaQuery = useQuery<HavrutaBoard>({
    queryKey: QUERY_KEY.havrutaBoard.havrutaBoardById(havrutaId),
    queryFn: async () => getHavrutaBoardById(havrutaId),
    retry: false,
  });

  const commentCountQuery = useQuery<number>({
    queryKey: QUERY_KEY.comment.commentsCountById(havrutaId),
    queryFn: async () => getCommentsCountByCategory(havrutaId),
    retry: false,
  });

  useEffect(() => {
    if (hasNavigated.current) return;

    if (havrutaQuery.isError) {
      const error = havrutaQuery.error;

      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status == 404) {
          hasNavigated.current = true;
          navigate('/not-found');
          return;
        }

        if (status == 403) {
          hasNavigated.current = true;
          navigate('/forbidden');
          return;
        }

        if (status == 500) {
          hasNavigated.current = true;
          navigate('/internal-server-error');
          return;
        }
      }

      hasNavigated.current = true;
      navigate('/internal-server-error', {
        state: {
          message: error instanceof Error ? error.message : 'Unknown error',
        },
      });
      return;
    }
  });

  if (havrutaQuery.isFetching || commentCountQuery.isFetching) {
    return <div>로딩 중...</div>;
  }

  if (havrutaQuery.isSuccess && commentCountQuery.isSuccess) {
    return (
      <div className={styles['full-width']}>
        <HavrutaBoardDetailItem
          havrutaBoard={havrutaQuery.data}
          commentCount={commentCountQuery.data}
        />
      </div>
    );
  }

  return <div>데이터를 불러올 수 없습니다.</div>;
}

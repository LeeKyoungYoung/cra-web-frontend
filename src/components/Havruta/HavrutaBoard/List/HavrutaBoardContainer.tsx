import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/api/queryKey';
import { Havruta, HavrutaBoard } from '~/models/Havruta';
import {
  getHavrutaBoards,
  getHavrutaBoardsByHavrutaId,
  getHavrutaBoardsCount,
  getHavrutaBoardsCountByHavrutaId,
} from '~/api/havruta/havrutaBoard';
import { getAllHavrutas } from '~/api/havruta/havruta';
import HavrutaBoardList from './HavrutaBoardList';

function HavrutaBoardContainer() {
  const [selectedHavrutaId, setSelectedHavrutaId] = useState<number | null>(
    null,
  );
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  // 전체 게시물 개수 쿼리
  const havrutaBoardCountQuery = useQuery<HavrutaBoard[]>({
    queryKey: QUERY_KEY.havrutaBoard.havrutaBoardsCount(),
    queryFn: async () => getHavrutaBoardsCount(),
  });

  // 전체 게시물 가져오기 쿼리
  const havrutaBoardQuery = useQuery<HavrutaBoard[]>({
    queryKey: QUERY_KEY.havrutaBoard.havrutaBoards(currentPage),
    queryFn: async () => getHavrutaBoards(currentPage),
  });

  // 과목별 게시물 개수 쿼리
  const havrutaBoardCountByHavrutaIdQuery = useQuery<HavrutaBoard[]>({
    queryKey: QUERY_KEY.havrutaBoard.havrutaBoardsCountByHavrutaId(
      selectedHavrutaId ?? 1,
    ),
    queryFn: async () =>
      getHavrutaBoardsCountByHavrutaId(selectedHavrutaId ?? 1),
  });

  // 과목별 게시물 가져오기 쿼리
  const havrutaBoardByHavrutaIdQuery = useQuery<HavrutaBoard[]>({
    queryKey: QUERY_KEY.havrutaBoard.havrutaBoardsByHavrutaId(
      selectedHavrutaId ?? 0,
      currentPage,
    ),
    queryFn: async () =>
      getHavrutaBoardsByHavrutaId(selectedHavrutaId ?? 0, currentPage),
    enabled: selectedHavrutaId !== null,
  });

  // 하브루타 과목 쿼리
  const havrutaQuery = useQuery<Havruta[]>({
    queryKey: QUERY_KEY.havruta.havrutas(),
    queryFn: async () => getAllHavrutas(),
  });

  const totalItems =
    selectedHavrutaId === null
      ? (havrutaBoardCountQuery.data?.length ?? 0)
      : (havrutaBoardCountByHavrutaIdQuery.data?.length ?? 0);

  const totalPage = Math.ceil(totalItems / itemsPerPage);

  return (
    <HavrutaBoardList
      havrutaQuery={havrutaQuery}
      havrutaBoardQuery={
        selectedHavrutaId === null
          ? havrutaBoardQuery
          : havrutaBoardByHavrutaIdQuery
      }
      totalPages={totalPage}
      currentPage={currentPage}
      selectedHavrutaId={selectedHavrutaId}
      onPageChange={setCurrentPage}
      onHavrutaChange={setSelectedHavrutaId}
    />
  );
}

export default HavrutaBoardContainer;

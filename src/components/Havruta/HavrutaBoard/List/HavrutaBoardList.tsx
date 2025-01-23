import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/api/queryKey';
import { Link } from 'react-router-dom';
import { Havruta, HavrutaBoard } from '~/models/Havruta';
import HavrutaBoardItem from '../Item/HavrutaBoardItem';
import {
  getHavrutaBoards,
  getHavrutaBoardsByHavrutaId,
  getHavrutaBoardsCount,
  getHavrutaBoardsCountByHavrutaId,
} from '~/api/havruta/havrutaBoard';
import { getHavrutas } from '~/api/havruta/havruta';
import SelectedDot from '~/assets/images/Dot/Selected-Dot.png';
import LeftVector from '~/assets/images/Vector/LeftVector.png';
import RightVector from '~/assets/images/Vector/RightVector.png';
import styles from './HavrutaBoardList.module.css';

export default function HavrutaBoardList() {
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
      selectedHavrutaId ?? 0,
    ),
    queryFn: async () =>
      getHavrutaBoardsCountByHavrutaId(selectedHavrutaId ?? 0),
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
    queryFn: async () => getHavrutas(),
  });

  let content;

  // 전체 상태 (havrutaBoardQuery 사용)
  if (selectedHavrutaId === null) {
    if (havrutaBoardQuery.isLoading) {
      content = <div className="loading">데이터를 불러오는 중입니다...</div>;
    } else if (havrutaBoardQuery.isError) {
      content = <div className="error">에러가 발생했습니다!</div>;
    } else if (havrutaBoardQuery.isSuccess) {
      content = havrutaBoardQuery.data
        .filter((havrutaBoard) => havrutaBoard.id !== undefined)
        .map((havrutaBoard, index) => (
          <div key={`havruta-${havrutaBoard.id}`}>
            <div className={styles['board-wrapper']}>
              <HavrutaBoardItem havrutaBoard={havrutaBoard} />
            </div>
            {index < havrutaBoardQuery.data.length - 1 && (
              <div className={styles['divider']}></div>
            )}
          </div>
        ));
    }
  } else {
    // 특정 과목 상태 (havrutaBoardByHavrutaIdQuery 사용)
    if (havrutaBoardByHavrutaIdQuery.isLoading) {
      content = <div className="loading">데이터를 불러오는 중입니다...</div>;
    } else if (havrutaBoardByHavrutaIdQuery.isError) {
      content = <div className="error">에러가 발생했습니다!</div>;
    } else if (havrutaBoardByHavrutaIdQuery.isSuccess) {
      content = havrutaBoardByHavrutaIdQuery.data
        .filter((havrutaBoard) => havrutaBoard.id !== undefined)
        .map((havrutaBoard, index) => (
          <div key={`havruta-${havrutaBoard.id}`}>
            <div className={styles['board-wrapper']}>
              <HavrutaBoardItem havrutaBoard={havrutaBoard} />
            </div>
            {index < havrutaBoardByHavrutaIdQuery.data.length - 1 && (
              <div className={styles['divider']}></div>
            )}
          </div>
        ));
    }
  }

  // 게시물 수 계산
  const totalItems =
    selectedHavrutaId === null
      ? (havrutaBoardCountQuery.data?.length ?? 0)
      : (havrutaBoardCountByHavrutaIdQuery.data?.length ?? 0);

  console.log('totalItems:', totalItems);

  const totalPage = Math.ceil(totalItems / itemsPerPage);
  console.log('totalPage:', totalPage);

  // 페이지 넘기기 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  let contentSideBar;

  if (havrutaQuery.isLoading) {
    contentSideBar = <div>로딩중...</div>;
  } else if (havrutaQuery.isError) {
    contentSideBar = <div>ERORR!!!</div>;
  } else if (havrutaQuery.isSuccess) {
    if (havrutaQuery.data.length === 0) {
      console.log('서버 통신 가능, 아직 데이터 없음');
    } else {
      contentSideBar = (
        <ul className={styles.menu}>
          <h2>과목 목록</h2>
          <li
            className={`${styles.menuItem} ${
              selectedHavrutaId === null ? styles.selected : ''
            }`}
          >
            <img src={SelectedDot} />
            <Link to="#" onClick={() => setSelectedHavrutaId(null)}>
              전체
            </Link>
          </li>
          {havrutaQuery.data.map((havrutaElement) => (
            <li
              key={havrutaElement.id}
              className={`${styles.menuItem} ${
                selectedHavrutaId === havrutaElement.id ? styles.selected : ''
              }`}
            >
              <img src={SelectedDot} />
              <Link
                to="#"
                onClick={() => setSelectedHavrutaId(havrutaElement.id ?? null)}
              >
                {havrutaElement.className} ({havrutaElement.professor})
              </Link>
            </li>
          ))}
        </ul>
      );
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>{contentSideBar}</div>
      <div className={styles.content}>
        <h2 className={styles.title}>하브루타 게시판</h2>
        <div className={styles['board-list']}>{content}</div>
        <div className={styles['board-list-footer']}>
          <div className={styles['spacer']}></div>
          <div className={styles['pagenations']}>
            <img src={LeftVector} />
            {[...Array(totalPage)].map((_, pageIndex) => (
              <div
                key={pageIndex}
                className={`${styles['pagenations-elipse']} ${
                  currentPage === pageIndex
                    ? styles['pagenations-elipse-selected']
                    : styles['pagenations-elipse-unselected']
                }`}
                onClick={() => handlePageChange(pageIndex)}
              >
                {pageIndex + 1}
              </div>
            ))}
            <img src={RightVector} />
          </div>
          <Link className={styles['write-link']} to="./write">
            글쓰기
          </Link>
          <Link to={'../admin/havruta'}>어드민</Link>
        </div>
      </div>
    </div>
  );
}

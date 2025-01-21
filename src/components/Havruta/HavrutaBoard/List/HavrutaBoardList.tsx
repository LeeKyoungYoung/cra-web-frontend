import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/api/queryKey';
import { Link } from 'react-router-dom';
import { Havruta, HavrutaBoard } from '~/models/Havruta';
import HavrutaBoardItem from '../Item/HavrutaBoardItem';
import {
  getHavrutaBoards,
  getHavrutaBoardsByHavrutaId,
} from '~/api/havruta/havrutaBoard';
import { getHavrutas } from '~/api/havruta/havruta';
import SelectedDot from '~/assets/images/Dot/Selected-Dot.png';
import styles from './HavrutaBoardList.module.css';

export default function HavrutaBoardList() {
  // 유저가 사이드바에서 선택한 하브루타 ID의 대한 상태 관리
  const [selectedHavrutaId, setSelectedHavrutaId] = useState<number | null>(
    null,
  );

  // 하브루타 게시물 모두 가져오기
  const havrutaBoardQuery = useQuery<HavrutaBoard[]>({
    queryKey: QUERY_KEY.havrutaBoard.havrutaBoards(),
    queryFn: async () => getHavrutaBoards(),
  });

  // 하브루타 과목 별 게시물 모두 가져오기
  const havrutaBoardByHavrutaIdQuery = useQuery<HavrutaBoard[]>({
    queryKey: QUERY_KEY.havrutaBoard.havrutaBoardsByHavrutaId(
      selectedHavrutaId ?? 0,
    ),
    queryFn: async () => getHavrutaBoardsByHavrutaId(selectedHavrutaId ?? 0),
    enabled: selectedHavrutaId !== null,
  });

  // 하브루타 과목 가져오기기
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

    return (
      <div className={styles.container}>
        <div className={styles.sidebar}>{contentSideBar}</div>
        <div className={styles.content}>
          <h2 className={styles.title}>하브루타 게시판</h2>
          <div className={styles['board-list']}>{content}</div>
          <div className={styles['board-list-footer']}>
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
            <Link to={'../admin/havruta'}>어드민</Link>
          </div>
        </div>
      </div>
    );
  }
}

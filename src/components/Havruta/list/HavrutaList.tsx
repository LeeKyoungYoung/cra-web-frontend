import React from 'react';
import { CATEGORY_STRINGS } from '../../../constants/category_strings';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../../api/queryKey';
import { Link } from 'react-router-dom';
import styles from './HavrutaList.module.css';
import { Havruta } from '~/models/Havruta';
import { getHavruta } from '~/api/havruta';
import HavrutaItem from '../Item/HavrutaItem';

//전체게시글을 페이지에 띄우기
export default function HavrutaList() {
  const havrutaQuery = useQuery<Havruta[]>({
    queryKey: QUERY_KEY.havruta.havrutas(),
    queryFn: async () => getHavruta(),
  });

  let content;

  if (havrutaQuery.isLoading) {
    content = <div className="loading">데이터를 불러오는 중입니다...</div>;
  } else if (havrutaQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (havrutaQuery.isSuccess) {
    content = havrutaQuery.data.map((havruta, index) => {
      if (havruta.id === undefined)
        return console.log('서버 통신 가능, 아직 데이터 없음');
      return (
        <div key={`havruta-${havruta.id}`}>
          <div className={styles['board-wrapper']}>
            <HavrutaItem havruta={havruta} />
            {/* Delete id={board.id} category={category} /> */}
          </div>
          {index < havrutaQuery.data.length - 1 && (
            <div className={styles['divider']}></div>
          )}
        </div>
      );
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <ul className={styles.menu}>
          <h2>과목 목록</h2>
          <li className={styles.menuItem}>
            <Link to="/menu1">과목 1</Link>
            {/* 이 자리에 어드민이 추가한 과목을 불러와야 함 */}
          </li>
          <li className={styles.menuItem}>
            <Link to="/menu2">과목 2</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/menu3">과목 3</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/menu4">과목 4</Link>
          </li>
        </ul>
      </div>
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

import React from 'react';
import { Link } from 'react-router-dom';
import SelectedDot from '~/assets/images/Dot/Selected-Dot.png';
import { UseQueryResult } from '@tanstack/react-query';
import { Havruta } from '~/models/Havruta';
import styles from './HavrutaSidebar.module.css';

interface HavrutaSidebarProps {
  havrutaQuery: UseQueryResult<Havruta[], unknown>;
  selectedHavrutaId: number | null;
  onHavrutaChange: (id: number | null) => void;
}

function HavrutaSidebar({
  havrutaQuery,
  selectedHavrutaId,
  onHavrutaChange,
}: HavrutaSidebarProps) {
  if (havrutaQuery.isLoading) return <div>로딩중...</div>;
  if (havrutaQuery.isError) return <div>ERROR!</div>;

  return (
    <ul className={styles.menu}>
      <h2>과목 목록</h2>
      <li
        className={`${styles.menuItem} ${
          selectedHavrutaId === null ? styles.selected : ''
        }`}
      >
        <img src={SelectedDot} />
        <Link to="#" onClick={() => onHavrutaChange(null)}>
          전체
        </Link>
      </li>
      {havrutaQuery.data?.map((havruta) => (
        <li
          key={havruta.id}
          className={`${styles.menuItem} ${
            selectedHavrutaId === havruta.id ? styles.selected : ''
          }`}
        >
          <img src={SelectedDot} />
          <Link to="#" onClick={() => onHavrutaChange(havruta.id ?? null)}>
            {havruta.className} ({havruta.professor})
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HavrutaSidebar;

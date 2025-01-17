import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HavrutaItem.module.css';
import { Havruta } from '~/models/Havruta';

export default function HavrutaItem({ havruta }: { havruta: Havruta }) {
  return (
    <Link to={`./view/${havruta.id}`} className={styles['temp-link']}>
      <div className={styles['board-item-container']}>
        <div>
          <div className={styles['board-user-name']}>{havruta.className}</div>
          {/* 과목명 */}
          <div className={styles['board-title']}>
            <div className={styles['board-title']}>{havruta.title}</div>
          </div>
        </div>
        <div className={styles['board-content']}>{havruta.content}</div>
      </div>
    </Link>
  );
}

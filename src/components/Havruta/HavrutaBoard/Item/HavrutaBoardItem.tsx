import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HavrutaBoardItem.module.css';
import { HavrutaBoard } from '~/models/Havruta';

function HavrutaBoardItem({ havrutaBoard }: { havrutaBoard: HavrutaBoard }) {
  return (
    <Link
      to={`/havruta/view/${havrutaBoard.id}`}
      className={styles['temp-link']}
    >
      <div className={styles['board-item-container']}>
        <div>
          <div className={styles['board-professor']}>
            {havrutaBoard.className} ({havrutaBoard.professor})
          </div>
          <div className={styles['board-title']}>
            <div className={styles['board-title']}>{havrutaBoard.title}</div>
          </div>
        </div>
        <div className={styles['board-content']}>{havrutaBoard.content}</div>
      </div>
    </Link>
  );
}

export default HavrutaBoardItem;

import React from 'react';
import { Board } from '../../../models/Board';
import { Link } from 'react-router-dom';
import styles from './BoardItem.module.css';

export default function BoardItem({ board }: { board: Board }) {
  return (
    <Link to={`./view/${board.id}`}>
      <div>
        <div>
          <div>{board.userId}</div>
          <div>
            <div>{board.title}</div>
          </div>
        </div>
        <div>{board.content}</div>
      </div>
    </Link>
  );
}

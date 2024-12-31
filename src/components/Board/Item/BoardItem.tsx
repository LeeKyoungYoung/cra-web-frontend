import React from 'react';
import { Board } from '../../../models/Board';
import { Link } from 'react-router-dom';
import './BoardItem.css';

export default function BoardItem({ board }: { board: Board }) {
  return (
    <div className="board-content">
      <div>
        제목: <Link to={`./view/${board.id}`}>{board.title}</Link>
      </div>
      <div>내용: {board.content}</div>
    </div>
  );
}

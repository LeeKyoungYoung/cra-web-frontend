import React from 'react';
import { Link } from 'react-router-dom';
import { Board } from '../../models/Board';

export default function BoardItem({ board }: { board: Board }) {
  return (
    <div>
      <div>제목: {board.title}</div>
      <div>내용: {board.content}</div>
      <div>
        <Link to="/notice/detail">Detail</Link>
      </div>
    </div>
  );
}

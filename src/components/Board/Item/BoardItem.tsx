import React from 'react';
import { Board } from '../../../models/Board';
import './BoardItem.css';

export default function BoardItem({ board }: { board: Board }) {
  return (
    <div className="board-content">
      <div>제목: {board.title}</div>
      <div>내용: {board.content}</div>
    </div>
  );
}

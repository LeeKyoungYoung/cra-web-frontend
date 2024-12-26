import React from 'react';
import { Link } from 'react-router-dom';

export default function NoticeWrite() {
  return (
    <div className="board">
      <h2>공지 추가</h2>
      <p>내용</p>
      <textarea
        name="notice-content"
        id="notice-content"
        className="input-form"
      />
    </div>
  );
}

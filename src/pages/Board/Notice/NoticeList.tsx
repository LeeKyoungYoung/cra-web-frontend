import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';

export default function NoticeList() {
  return (
    <div className="board">
      <h2>공지 게시판</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <Link to="/notice-detail">예시1</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/notice-detail">예시2</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to="/notice-write">게시물 추가</Link>
      </div>
    </div>
  );
}

import React from 'react';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="main-page">
      <div className="section">
        <p>동아리 활동 사진 갤러리</p>
        <p>인스타그램 (cra_handong)에 게시된 사진</p>
      </div>
      <div className="section">
        <p>동아리 공지사항</p>
      </div>
      <div className="section">
        <p>학술 게시판 내용</p>
      </div>
    </div>
  );
}

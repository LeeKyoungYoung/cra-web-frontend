import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderIntro() {
  return (
    <div>
      <Link to="/intro">로고</Link>
      <div>CRA 배너</div>
      <Link to="/main">main()</Link>
    </div>
  );
}

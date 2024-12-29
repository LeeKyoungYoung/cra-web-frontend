import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderIntro.css';

export default function HeaderIntro() {
  return (
    <div className="header-intro">
      <ul>
        <Link to="/intro">
          <li>로고</li>
        </Link>

        <li> CRA 배너 </li>

        <Link to="/main">
          <li>main()</li>
        </Link>
      </ul>
    </div>
  );
}

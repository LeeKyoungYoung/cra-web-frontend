import { Link } from 'react-router-dom';
import './RecruitPage.css';

export default function RecruitPage() {
  return (
    <form action="" method="POST">
      <div className="recruit-page">
        <p>25-1 Recruit</p>
        <div className="recruit-section">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name" /*required*/
          />
        </div>
        <div className="recruit-section">
          <label htmlFor="studentnumber">학번</label>
          <input type="text" id="studentnumber" /*required*/ />
        </div>
        <div className="recruit-section">
          <label htmlFor="email">이메일</label>
          <input type="text" id="email" /*required*/ />
        </div>
        <div className="recruit-section">
          <label htmlFor="Motivation">지원동기</label>
          <input type="text" id="Motivation" /*required*/ />
        </div>
        <div className="recruit-section">
          <label htmlFor="experience">프로젝트 경험</label>
          <input type="text" id="experience" />
          <p>
            <input type="submit" />
          </p>
        </div>
      </div>
    </form>
  );
}

import { Link } from 'react-router-dom';
import './IntroPage.css';

export default function IntroPage() {
  return (
    <div className="intro-page">
      <div className="intro-section">
        <p>Visual Image</p>
        <p className="apply-button">
          <button>
            <Link to="/recruit">지원하기</Link>
          </button>
        </p>
      </div>
      <div className="intro-section">
        <p>동아리 소개</p>
      </div>
      <div className="intro-section">
        <p>동아리 프로젝트 소개</p>
      </div>
    </div>
  );
}

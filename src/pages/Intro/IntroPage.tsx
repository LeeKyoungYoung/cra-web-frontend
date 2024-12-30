import { Link } from 'react-router-dom';
import './IntroPage.css';
import ProjectIntro from './ProjectIntro';

const element = [
  {
    title: 'project1',
    content: '프로젝트 내용',
  },
  {
    title: 'project2',
    content: '프로젝트 내용',
  },
];

export default function IntroPage() {
  return (
    <div className="intro-page">
      <div className="intro-section intro-section-bg">
        <div className="banner">
          LIVE YOUR
          <div>PASSION</div>
          CODE YOUR DREAMS
        </div>
        <img className="character" />
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
        <p>
          동아리 프로젝트 소개
          <div className="project-element">
            {element.map((elementData) => (
              <ProjectIntro key={elementData.title} {...elementData} />
            ))}
          </div>
          <button>&lt;</button>
          <button>&gt;</button>
        </p>
      </div>
    </div>
  );
}

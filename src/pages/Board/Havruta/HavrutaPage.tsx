import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BoardList from '../../../components/Board/List/BoardList';
import { CATEGORY } from '../../../constants/category';
import './HavrutaPage.css';

// 초성별 과목 예시
const subjectsByInitial = {
  ㄱ: [
    { name: '그림 기초', professor: ['홍길동', '김민수'] },
    { name: '고급 프로그래밍', professor: ['이상윤', '박지은'] },
    { name: '게임 개발', professor: ['최병훈', '정유진'] },
  ],
  ㄴ: [
    { name: '네트워크 기초', professor: ['이승준', '최정현'] },
    { name: '네트워크 프로그래밍', professor: ['윤수연', '한민희'] },
    { name: '논리적 사고', professor: ['김지훈', '박상민'] },
  ],
  ㄷ: [
    { name: '디지털 시스템', professor: ['김상현', '박상진'] },
    { name: '데이터베이스 관리', professor: ['정유리', '한지혜'] },
    { name: '동적 웹 프로그래밍', professor: ['홍성기', '오지현'] },
  ],
};

export default function HavrutaPage() {
  const [selectedSubjects, setSelectedSubjects] = useState<
    { name: string; professor: string }[]
  >([]); // 선택된 과목과 교수님

  // 초성 버튼 클릭 시 해당 과목 리스트를 업데이트하는 함수
  const handleInitialClick = (initial: string) => {
    setSelectedSubjects(subjectsByInitial[initial] || []); // 해당 초성에 맞는 과목 설정
  };

  // 교수님 선택 변경 처리
  const handleProfessorChange = (index: number, professor: string) => {
    const updatedSubjects = [...selectedSubjects];
    updatedSubjects[index].professor = professor; // 교수님 변경
    setSelectedSubjects(updatedSubjects);
  };

  return (
    <div className="container">
      <header>
        <h1>Havruta 게시판</h1>
      </header>

      <section className="initial-buttons">
        <h2>Handong 25-1 개설 과목</h2>
        <div className="buttons">
          {Object.keys(subjectsByInitial).map((initial) => (
            <button
              key={initial}
              onClick={() => handleInitialClick(initial)}
              className="initial-button"
            >
              {initial}
            </button>
          ))}
        </div>
      </section>

      <section className="subject-list">
        <h2>선택된 과목</h2>
        {selectedSubjects.length > 0 ? (
          <table className="subject-table">
            <thead>
              <tr>
                <th>과목명</th>
                <th>교수님 선택</th>
              </tr>
            </thead>
            <tbody>
              {selectedSubjects.map((subject, index) => (
                <tr key={index}>
                  <td>{subject.name}</td>
                  <td>
                    <select
                      value={subject.professor}
                      onChange={(e) =>
                        handleProfessorChange(index, e.target.value)
                      }
                    >
                      {subject.professor.map((prof, i) => (
                        <option key={i} value={prof}>
                          {prof}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>초성을 선택해주세요.</p>
        )}
      </section>

      {/* BoardList 컴포넌트 추가 */}
      <BoardList category={CATEGORY.HAVRUTA} />
    </div>
  );
}

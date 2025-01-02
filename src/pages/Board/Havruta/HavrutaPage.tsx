import React, { useState } from 'react';
import BoardList from '../../../components/Board/List/BoardList';
import { CATEGORY } from '../../../constants/category';
import styles from './HavrutaPage.module.css';

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
    { name: string; professor: string[] }[]
  >([]);

  const handleInitialClick = (initial: string) => {
    setSelectedSubjects(subjectsByInitial[initial] || []);
  };

  const handleProfessorChange = (index: number, professor: string) => {
    const updatedSubjects = [...selectedSubjects];
    updatedSubjects[index] = {
      ...updatedSubjects[index],
      professor: [professor],
    };
    setSelectedSubjects(updatedSubjects);
  };

  return (
    <div className={styles.container}>
      <header>
        <h1>Havruta 게시판</h1>
      </header>

      <section className={styles.initialButtons}>
        <h2>Handong 25-1 개설 과목</h2>
        <div className={styles.buttons}>
          {Object.keys(subjectsByInitial).map((initial) => (
            <button
              key={initial}
              onClick={() => handleInitialClick(initial)}
              className={styles.initialButton}
            >
              {initial}
            </button>
          ))}
        </div>
      </section>

      <section className={styles.subjectList}>
        <h2>선택된 과목</h2>
        {selectedSubjects.length > 0 ? (
          <table className={styles.subjectTable}>
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
                      value={subject.professor[0]}
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

      <BoardList category={CATEGORY.HAVRUTA} />
    </div>
  );
}

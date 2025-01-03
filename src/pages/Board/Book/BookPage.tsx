import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BoardList from '~/components/Board/List/BoardList';
import { CATEGORY } from '../../../constants/category';
import styles from './BookPage.module.css';

// 도서의 상태를 정의하는 타입
interface Book {
  bookTitle: string;
  author: string;
  status: '대여가능' | '대여중';
  description: string; // 책 설명 추가
}

export default function BookPage() {
  const [availableBooks, setAvailableBooks] = useState<Book[]>([
    {
      bookTitle: 'React 기초',
      author: '홍길동',
      status: '대여가능',
      description: 'React의 기초부터 고급까지 배우는 책',
    },
    {
      bookTitle: 'Node.js 개발',
      author: '이순신',
      status: '대여가능',
      description: 'Node.js를 활용한 웹 애플리케이션 개발 책',
    },
    {
      bookTitle: 'Python 프로그래밍',
      author: '김유신',
      status: '대여가능',
      description: 'Python 언어의 기초와 다양한 활용법',
    },
    {
      bookTitle: 'JavaScript 마스터',
      author: '박명수',
      status: '대여가능',
      description: 'JavaScript를 마스터하기 위한 책',
    },
  ]);
  const [rentedBooks, setRentedBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null); // 선택된 책 정보 상태

  // 도서 대여 함수
  const handleRentBook = (book: Book) => {
    if (book.status === '대여가능') {
      setAvailableBooks(availableBooks.filter((b) => b !== book));
      setRentedBooks([...rentedBooks, { ...book, status: '대여중' }]);
    }
  };

  // 도서 반납 함수
  const handleReturnBook = (book: Book) => {
    if (book.status === '대여중') {
      setRentedBooks(rentedBooks.filter((b) => b !== book));
      setAvailableBooks([...availableBooks, { ...book, status: '대여가능' }]);
    }
  };

  // 책 정보 보기 함수
  const handleBookClick = (book: Book) => {
    setSelectedBook(book); // 책 정보 상태 설정
  };

  return (
    <div className={styles.container}>
      <header>
        <h1>도서 대여 시스템</h1>
      </header>

      <section className={styles.bookList}>
        <h2>대여 가능한 도서 목록</h2>
        <table className={styles.availableBooks}>
          <thead>
            <tr>
              <th>도서 제목</th>
              <th>저자</th>
              <th>상태</th>
              <th>대여하기</th>
            </tr>
          </thead>
          <tbody>
            {availableBooks.map((book, index) => (
              <tr key={index}>
                <td>
                  <button
                    onClick={() => handleBookClick(book)}
                    className={styles.bookTitleButton}
                  >
                    {book.bookTitle}
                  </button>
                </td>
                <td>{book.author}</td>
                <td>{book.status}</td>
                <td>
                  <button
                    onClick={() => handleRentBook(book)}
                    disabled={book.status !== '대여가능'}
                    className={styles.rentButton}
                  >
                    대여하기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>대여 중인 도서 목록</h2>
        <table className={styles.rentedBooks}>
          <thead>
            <tr>
              <th>도서 제목</th>
              <th>저자</th>
              <th>상태</th>
              <th>반납하기</th>
            </tr>
          </thead>
          <tbody>
            {rentedBooks.map((book, index) => (
              <tr key={index}>
                <td>{book.bookTitle}</td>
                <td>{book.author}</td>
                <td>{book.status}</td>
                <td>
                  <button
                    onClick={() => handleReturnBook(book)}
                    disabled={book.status !== '대여중'}
                    className={styles.returnButton}
                  >
                    반납하기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 책 정보 모달 */}
      {selectedBook && (
        <div className={styles.bookDetails}>
          <h2>책 상세 정보</h2>
          <p>
            <strong>제목:</strong> {selectedBook.bookTitle}
          </p>
          <p>
            <strong>저자:</strong> {selectedBook.author}
          </p>
          <p>
            <strong>상태:</strong> {selectedBook.status}
          </p>
          <p>
            <strong>설명:</strong> {selectedBook.description}
          </p>
          <button onClick={() => setSelectedBook(null)}>닫기</button>
        </div>
      )}

      {/* BoardList 컴포넌트 추가 */}
      <BoardList category={CATEGORY.BOOK} />
    </div>
  );
}

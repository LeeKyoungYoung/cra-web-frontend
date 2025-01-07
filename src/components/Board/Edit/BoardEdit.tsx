import React, { useEffect, useState } from 'react';
import { CATEGORY_STRINGS } from '../../../constants/category_strings';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getBoardById, updateBoards } from '../../../api/board';
import { Board } from '../../../models/Board';
import styles from './BoardEdit.module.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { QUERY_KEY } from '../../../api/queryKey';
import { CATEGORY } from '~/constants/category';

export default function BoardEdit({ category }: { category: number }) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const [formData, setFormData] = useState({
    userId: 52,
    title: '',
    content: '',
    category: category,
    imageUrls: [''],
  });

  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 id 가져오기
  const boardId = Number(id); // id를 숫자로 변환

  const boardQuery = useQuery<Board>({
    queryKey: QUERY_KEY.board.boardById(boardId),
    queryFn: async () => getBoardById(boardId),
  });

  let content;

  const mutation = useMutation({
    mutationFn: (newBoard: Board) => updateBoards(newBoard),
    onSuccess: async () => {
      alert('게시글 수정 성공');
      await navigate(-2);
    },
    onError: (error) => {
      console.error('게시글 수정 실패:', error);
      alert('게시글 수정 실패');
    },
  });

  useEffect(() => {
    if (boardQuery.isSuccess && boardQuery.data) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...boardQuery.data,
      }));
    }
  }, [boardQuery.isSuccess, boardQuery.data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'imageUrls' ? value.split(',') : value,
    });
  };

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  if (boardQuery.isLoading) {
    content = <div className="loading">데이터를 불러오는 중입니다...</div>;
  } else if (boardQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (boardQuery.isSuccess) {
    console.log(formData);
    return (
      <div className={styles['write-container']}>
        <form className={styles['write-form']} onSubmit={HandleSubmit}>
          <h2 className={styles['write-title']}>
            {CATEGORY_STRINGS[category]} 게시글 수정
          </h2>

          <label htmlFor="userId">학번</label>
          <input
            type="number"
            id="userId"
            name="userId"
            placeholder="추후 삭제 예정 항목"
            value={formData.userId}
            readOnly
            onChange={handleChange}
          />
          <br />
          <label htmlFor="title">제목</label>
          <input
            className={styles['input-title']}
            type="text"
            id="title"
            name="title"
            placeholder="제목을 입력하세요."
            value={formData.title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="content">내용</label>
          <textarea
            className={styles['input-content']}
            id="content"
            name="content"
            placeholder="내용을 입력하세요."
            value={formData.content}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="imageUrls">이미지 주소</label>
          <input
            type="text"
            id="imageUrls"
            name="imageUrls"
            placeholder="이미지 주소 (추후 삭제 예정 항목)"
            value={formData.imageUrls.join(',')}
            onChange={handleChange}
          />
          <br />
          <input
            className={styles['submit-button']}
            type="submit"
            value="게시글 수정"
          />
        </form>
      </div>
    );
  }

  return <div>{content}</div>;
}

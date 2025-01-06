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
      await navigate(`..`);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            {CATEGORY_STRINGS[category]} 게시글 작성
          </h2>

          <label htmlFor="userId">학번:</label>
          <input
            type="number"
            id="userId"
            name="userId"
            placeholder="Enter your Student ID"
            value={formData.userId}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="title">제목:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter the Title of the Post"
            value={formData.title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="content">내용:</label>
          <input
            type="text"
            id="content"
            name="content"
            placeholder="Write the Content of the Post"
            value={formData.content}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="category">카테고리:</label>
          <input
            type="text"
            id="category"
            name="category"
            // 카테고리에서 숫자대신 category_strings을 사용해서 어느 항목인지 문자로 출력하게 변경
            value={CATEGORY_STRINGS[formData.category]}
            readOnly
          />
          <br />
          <label htmlFor="imageUrls">이미지 주소:</label>
          <input
            type="text"
            id="imageUrls"
            name="imageUrls"
            placeholder="Enter Image URLs"
            value={formData.imageUrls.join(',')}
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="게시글 작성" />
        </form>
      </div>
    );
  }

  return <div>{content}</div>;
}

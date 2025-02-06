import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import {
  getHavrutaBoardById,
  updateHavrutaBoard,
} from '~/api/havruta/havrutaBoard.ts';
import { HavrutaBoard } from '~/models/Havruta.ts';
import { QUERY_KEY } from '~/api/queryKey.ts';
import styles from './HavrutaBoardEdit.module.css';

function HavrutaBoardEdit() {
  const navigate = useNavigate();

  const currentUrl = window.location.href;
  const id = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
  const boardId = Number(id);

  const [formData, setFormData] = useState({
    userId: 1,
    title: '',
    content: '',
    imageUrls: [''],
    havrutaId: 0,
  });

  const havrutaBoardQuery = useQuery<HavrutaBoard>({
    queryKey: QUERY_KEY.havrutaBoard.havrutaBoardById(boardId),
    queryFn: async () => getHavrutaBoardById(boardId),
  });

  let content;

  const mutation = useMutation({
    mutationFn: (newHavrutaBoard: HavrutaBoard) =>
      updateHavrutaBoard(newHavrutaBoard),
    onSuccess: async () => {
      alert('하브루타 게시물 수정 성공');
      await navigate(-1);
    },
    onError: (error) => {
      console.error('하브루타 게시물 수정 실패: ', error);
      alert('하브루타 게시물 수정 실패');
    },
  });

  useEffect(() => {
    if (havrutaBoardQuery.isSuccess && havrutaBoardQuery.data) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...havrutaBoardQuery.data,
      }));
    }
  }, [havrutaBoardQuery.isSuccess, havrutaBoardQuery.data]);

  const HandleChange = (
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

  if (havrutaBoardQuery.isLoading) {
    content = <div>데이터를 불러오는 중입니다...</div>;
  } else if (havrutaBoardQuery.isError) {
    content = <div>에러가 발생했습니다!!</div>;
  } else if (havrutaBoardQuery.isSuccess) {
    return (
      <div className={styles['edit-container']}>
        <form className={styles['edit-form']} onSubmit={HandleSubmit}>
          <h2 className={styles['edit-title']}>하브루타 게시물 수정</h2>

          <label htmlFor="userId">학번</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={HandleChange}
            required
          />
          <br />
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={HandleChange}
            required
          />
          <br />
          <label htmlFor="content">내용</label>
          <textarea
            className={styles['input-content']}
            id="content"
            name="content"
            placeholder="내용을 입력하세요."
            value={formData.content}
            onChange={HandleChange}
          />
          <br />
          <input
            className={styles['submit-button']}
            type="submit"
            value="하브루타 수정"
          />
        </form>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default HavrutaBoardEdit;

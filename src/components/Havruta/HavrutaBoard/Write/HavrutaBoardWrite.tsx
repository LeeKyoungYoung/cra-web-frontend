import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import styles from './HavrutaBoardWrite.module.css';
import { createHavrutaBoard } from '~/api/havruta/havrutaBoard';
import { HavrutaBoard } from '~/models/Havruta';
import { CATEGORY } from '~/constants/category';

export default function HavrutaBoardWrite() {
  const havrutaCategory = CATEGORY.HAVRUTA;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: 1,
    title: '',
    content: '',
    category: havrutaCategory,
    imageUrls: [],
    havrutaId: '',
  });

  const mutation = useMutation({
    mutationFn: (newHavrutaBoard: HavrutaBoard) =>
      createHavrutaBoard(newHavrutaBoard),
    onSuccess: async () => {
      await alert('게시글 작성 성공');
      navigate(-1);
      setFormData({
        userId: 1,
        title: '',
        content: '',
        category: havrutaCategory,
        imageUrls: [],
        havrutaId: '',
      });
    },

    onError: (error) => {
      console.error('게시글 작성 실패:', error);
      alert('게시글 작성 실패');
    },
  });

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
    console.log(formData);
    const updatedFormData = {
      ...formData,
      havrutaId: Number(formData.havrutaId),
    };
    mutation.mutate(updatedFormData);
  };

  return (
    <div className={styles['write-container']}>
      <form className={styles['write-form']} onSubmit={HandleSubmit}>
        <h2 className={styles['write-title']}>하브루타 게시글 작성</h2>

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
        <label htmlFor="havrutaId">과목명</label>
        {/* 토글 방식 고려해볼만 하다. */}
        <input
          type="text"
          id="havrutaId"
          name="havrutaId"
          placeholder="과목명"
          value={formData.havrutaId}
          onChange={handleChange}
        />
        <br />
        <input
          className={styles['submit-button']}
          type="submit"
          value="게시글 작성"
        />
      </form>
    </div>
  );
}

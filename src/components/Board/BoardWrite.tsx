import React, { useState } from 'react';
import { CATEGORY_STRINGS } from '../../constants/category_strings';
import { useMutation } from '@tanstack/react-query';
import { createBoards } from '../../api/board';
import { Board } from '../../models/Board';

export default function BoardWrite({ category }: { category: number }) {
  const [formData, setFormData] = useState({
    userId: 52,
    title: '',
    content: '',
    category: category,
    imageUrls: [''],
  });

  const mutation = useMutation({
    mutationFn: (newBoard: Board) => createBoards(newBoard),
    onSuccess: () => {
      alert('게시글 작성 성공');
      setFormData({
        userId: 52,
        title: '',
        content: '',
        category: category,
        imageUrls: [''],
      });
    },
    onError: (error) => {
      console.error('게시글 작성 실패:', error);
      alert('게시글 작성 실패');
    },
  });

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

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <h2>{CATEGORY_STRINGS[category]} 게시글 작성</h2>

        <label htmlFor="userId">학번: </label>
        <input
          type="number"
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="title">제목: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="content">내용: </label>
        <input
          type="text"
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="category">카테고리: </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          readOnly
        />
        <br />
        <label htmlFor="imageUrls">이미지 주소 (쉼표로 구분): </label>
        <input
          type="text"
          id="imageUrls"
          name="imageUrls"
          value={formData.imageUrls.join(',')}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="게시글 작성" />
      </form>
    </div>
  );
}

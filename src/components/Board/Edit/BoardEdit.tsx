import React, { useState } from 'react';
import { CATEGORY_STRINGS } from '../../../constants/category_strings';
import { useMutation } from '@tanstack/react-query';
import { createBoards } from '../../../api/board';
import { Board } from '../../../models/Board';
import { useNavigate } from 'react-router-dom';
import './BoardWrite.css';

export default function BoardEdit({ category }: { category: number }) {
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
      alert('게시글 수정 성공');
      setFormData({
        userId: 52,
        title: '',
        content: '',
        category: category,
        imageUrls: [''],
      });
    },
    onError: (error) => {
      console.error('게시글 수정 실패:', error);
      alert('게시글 수정 실패');
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
      <h2>{CATEGORY_STRINGS[category]}게시글 수정하기</h2>
    </div>
  );
}

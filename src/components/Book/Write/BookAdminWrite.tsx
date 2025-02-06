import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Item } from '~/models/Item';
import { useNavigate } from 'react-router-dom';
import styles from '../../Project/Project.module.css';
import { createItems } from '~/api/item';
import { onUploadImage } from '~/api/board';

function BookAdminWrite() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    itemCategory: 1,
    imageUrl: '',
  });

  const mutation = useMutation({
    mutationFn: (newItem: Item) => createItems(newItem),
    onSuccess: async () => {
      await alert('도서 추가 성공');
      navigate(-1);
      setFormData({
        name: '',
        description: '',
        itemCategory: 1,
        imageUrl: '',
      });
    },
    onError: (error) => {
      console.error('도서 추가 실패:', error);
      alert('도서 추가 실패');
    },
  });

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files && files[0]) {
      const file = files[0];
      const imageUrl = await onUploadImage(file);

      if (imageUrl) {
        setFormData((formData) => ({ ...formData, imageUrl }));
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending Data:', formData);
    mutation.mutate(formData);
  };
  return (
    <div className={styles['container']}>
      <form onSubmit={HandleSubmit}>
        <h2>도서 관리</h2>

        <label htmlFor="Name">도서명</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="도서명 입력"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="description">설명</label>
        <br />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="설명 입력"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="imageSelect">이미지 선택</label>
        <br />
        <input
          type="file"
          id="imageSelect"
          name="imageSelect"
          accept="image/*"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="도서 추가" />
      </form>
    </div>
  );
}

export default BookAdminWrite;

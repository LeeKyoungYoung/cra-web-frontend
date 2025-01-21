import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { QUERY_KEY } from '~/api/queryKey';
import styles from '../../Project/Project.module.css';
import { Item } from '~/models/Item';
import { getItemById, updateItem } from '~/api/item';

function ItemAdminEdit() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    itemCategory: 0,
    imageUrl: '',
    isBorrowed: true,
  });
  const { id } = useParams<{ id: string }>();
  const itemId = Number(id);

  const itemQuery = useQuery<Item>({
    queryKey: ['item', 'itemById', itemId],
    queryFn: async () => getItemById(itemId),
  });

  let content;

  const mutation = useMutation({
    mutationFn: (newItem: Item) => updateItem(newItem),
    onSuccess: async () => {
      alert('수정 성공');
      await navigate(-1);
    },
    onError: (error) => {
      console.error('수정 실패:', error);
      alert('수정 실패');
    },
  });

  useEffect(() => {
    if (itemQuery.isSuccess && itemQuery.data) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...itemQuery.data,
      }));
    }
  }, [itemQuery.isSuccess, itemQuery.data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === 'members' || name === 'imageUrls') {
      setFormData({
        ...formData,
        [name]: value.split(','),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  if (itemQuery.isLoading) {
    content = <div className="loading">데이터를 불러오는 중입니다...</div>;
  } else if (itemQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (itemQuery.isSuccess) {
    console.log(formData);
    return (
      <div className={styles['container']}>
        <form onSubmit={HandleSubmit}>
          <h1>비품 게시글 수정</h1>
          <label htmlFor="Name">제품명</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="제품명 입력"
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
          <label htmlFor="imageUrl">이미지 주소</label>
          <br />
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="이미지 주소"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
          <br />
          <input type="submit" value="프로젝트 수정" />
        </form>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default ItemAdminEdit;

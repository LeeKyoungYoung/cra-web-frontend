import React, { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createBoards } from '~/api/board';
import { useNavigate } from 'react-router-dom';
import styles from './BoardWrite.module.css';
import { Editor } from '@toast-ui/react-editor';
import { colorSyntax, codeSyntaxHighlight, Prism } from '~/styles/toast-ui';

export default function BoardWrite({ category }: { category: number }) {
  const navigate = useNavigate();
  const editorRef = useRef<any>();
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    userId: 1,
    title: '',
    content: '',
    category: category,
    imageUrls: [],
  });

  const mutation = useMutation({
    mutationFn: async () => {
      return await createBoards(
        { ...formData, content: editorRef.current.getInstance().getMarkdown() },
        files,
      );
    },
    onSuccess: async () => {
      alert('게시글 작성 성공');
      navigate(-1);
      setFormData({
        userId: 1,
        title: '',
        content: '',
        category: category,
        imageUrls: [],
      });
      setFiles([]);
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
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'imageUrls' ? value.split(',') : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className={styles['write-container']}>
      <form className={styles['write-form']} onSubmit={handleSubmit}>
        <h2 className={styles['write-title']}>글쓰기</h2>

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

        <label htmlFor="content">내용</label>
        <Editor
          ref={editorRef}
          initialValue=" "
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax]}
        />

        <label htmlFor="files">파일 업로드</label>
        <input type="file" id="files" multiple onChange={handleFileChange} />

        <input
          className={styles['submit-button']}
          type="submit"
          value="게시글 작성"
        />
      </form>
    </div>
  );
}

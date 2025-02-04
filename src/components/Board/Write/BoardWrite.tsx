import React, { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createBoards, onUploadImage } from '~/api/board';
import { useNavigate } from 'react-router-dom';
import styles from './BoardWrite.module.css';
import { Editor } from '@toast-ui/react-editor';
import { colorSyntax, codeSyntaxHighlight, Prism } from '~/styles/toast-ui';

export default function BoardWrite({ category }: { category: number }) {
  const editorRef = useRef<any>();
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState<{
    userId: number;
    title: string;
    content: string;
    category: number;
    imageUrls: string[];
  }>({
    userId: 1,
    title: '',
    content: '',
    category: category,
    imageUrls: [],
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const content = editorRef.current.getInstance().getMarkdown();
      const filesToUpload = files || [];
      return await createBoards({ ...formData, content }, filesToUpload);
    },
    onSuccess: async () => {
      alert('게시글 작성 성공');
      const currentPath = window.location.pathname;
      const parentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
      window.location.href = parentPath;
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
    console.log('Submit 버튼 클릭됨');
    console.log('현재 formData:', formData);
    console.log('현재 files:', files);
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
          hooks={{
            addImageBlobHook: async (
              blob: File,
              callback: (url: string) => void,
            ) => {
              try {
                const url = await onUploadImage(blob); // URL을 받아옴
                callback(url); // Markdown 에디터에 삽입

                setFormData((prevData) => ({
                  ...prevData,
                  imageUrls: [...prevData.imageUrls, url], // DB로 전송할 이미지 URL 배열에 추가
                }));
              } catch (error) {
                console.error('이미지 업로드 실패:', error);
                alert('이미지 업로드에 실패했습니다.');
              }
            },
          }}
        />
        <br />
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

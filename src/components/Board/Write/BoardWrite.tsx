import React, { useState, useRef } from 'react';
import { CATEGORY_STRINGS } from '../../../constants/category_strings';
import { useMutation } from '@tanstack/react-query';
import { createBoards } from '../../../api/board';
import { Board } from '../../../models/Board';
import { useNavigate } from 'react-router-dom';
import styles from './BoardWrite.module.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

// 사용자가 게시글을 작성하여 서버에 업로드할 수 있는 기능
// Props로 category: number를 받아 게시글이 속할 카테고리를 결정
export default function BoardWrite({ category }: { category: number }) {
  const navigate = useNavigate();
  const editorRef = useRef<any>(); // Editor 인스턴스를 참조하기 위한 ref
  // 현재 상태 값 formData, 상태를 업데이트하는 함수: setFormData
  const [formData, setFormData] = useState({
    userId: 1, // Default로 userId를 일단 52로 설정
    title: '',
    content: '',
    category: category, // 부모 컴포넌트에서 전달된 category 값을 Default로 설정
    imageUrls: [''],
  });

  // react-query에서 제공하는 useMutation을 사용해서 비동기 작업(게시글 생성)을 관리
  const mutation = useMutation({
    // mutationFn은 데이터를 처리하는 비동기 함수를 지정함 (마치 createBoards같은 함수)
    // Board 객체인 newBoard를 사용해서 createBoards 함수로 보냄
    mutationFn: (newBoard: Board) => createBoards(newBoard),
    // 성공 시에 호출
    onSuccess: async () => {
      // alert 창으로 알려주기
      await alert('게시글 작성 성공');
      navigate(-1);
      // 성공 후 입력 폼을 원래 상태로 되돌리기
      setFormData({
        userId: 1, // test: userId로 유동적으로 변경
        title: '',
        content: '',
        category: category,
        imageUrls: [''],
      });
    },
    // 실패 시에 호출
    onError: (error) => {
      // 에러 console 창에 출력
      console.error('게시글 작성 실패:', error);
      alert('게시글 작성 실패');
    },
  });

  // 사용자의 입력을 처리하는 함수
  // 입력 필드의 값을 상태(formData)에 반영
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // e.target.name은 입력 필드의 이름
    // e.target.value은 입력된 값
    const { name, value } = e.target;
    setFormData({
      // 스프레드 연산자(...)를 사용하여 기존 formData 객체의 모든 값을 복사함
      ...formData,
      // imageUrls이 name인 value를 value.split(',')를 사용하여 쉼표로 구분된 문자열을 배열로 변환
      // ex) 'http://example.com/image1.jpg,http://example.com/image2.jpg' -> ['http://example.com/image1.jpg', 'http://example.com/image2.jpg']
      [name]: name === 'imageUrls' ? value.split(',') : value,
    });
  };

  // 폼 제출시 호출되는 함수
  const HandleSubmit = (e: React.FormEvent) => {
    // 디폴트 동작(페이지 새로고침)을 막음
    e.preventDefault();
    const editorInstance = editorRef.current.getInstance();
    setFormData({
      ...formData,
      content: editorInstance.getMarkdown(), // 편집된 내용을 저장
    });
    // react-query의 mutate 메서드를 통해 서버에 데이터를 전송
    mutation.mutate(formData);
  };

  return (
    <div className={styles['write-container']}>
      <form className={styles['write-form']} onSubmit={HandleSubmit}>
        <h2 className={styles['write-title']}>
          {CATEGORY_STRINGS[category]} 게시글 작성
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
        <Editor
          ref={editorRef} // Editor 인스턴스를 참조
          initialValue={formData.content || ' '}
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
          plugins={[colorSyntax]}
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
          value="게시글 작성"
        />
      </form>
    </div>
  );
}

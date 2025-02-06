import BookList from '~/components/Book/List/BookList.tsx';
import { ITEMCATEGORY } from '~/constants/itemCategory.ts';
import styles from './BookPage.module.css';

export default function BookPage() {
  return (
    <div className={styles['project-section']}>
      <p>도서 페이지</p>
      <BookList itemCategory={ITEMCATEGORY.BOOK} />
    </div>
  );
}

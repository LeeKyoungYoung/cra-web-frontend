import styles from './BookPage.module.css';
import { ITEMCATEGORY } from '~/constants/itemCategory';
import BookList from '~/components/Book/List/BookList';

export default function BookPage() {
  return (
    <div className={styles['project-section']}>
      <p>도서 페이지</p>
      <BookList itemCategory={ITEMCATEGORY.BOOK} />
    </div>
  );
}

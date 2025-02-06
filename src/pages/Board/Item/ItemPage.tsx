import ItemList from '~/components/Item/List/ItemList';
import { ITEMCATEGORY } from '~/constants/itemCategory';
import styles from './ItemPage.module.css';

export default function ItemPage() {
  return (
    <div className={styles['project-section']}>
      <p>비품 페이지</p>
      <ItemList itemCategory={ITEMCATEGORY.ITEM} />
    </div>
  );
}

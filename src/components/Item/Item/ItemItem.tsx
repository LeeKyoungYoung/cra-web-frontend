import { Item } from '~/models/Item';
import styles from '../../Project/Item/ProjectItem.module.css';

export default function ItemItem({ item }: { item: Item }) {
  return (
    <>
      <div className={styles['project-block']}>
        <div className={styles['project-picture']}>
          <img src={item.imageUrl} className={styles['project-picture']} />
        </div>
        <div className={styles['title']}>{item.name}</div>
        <div className={styles['content']}>{item.description}</div>
        <div className={styles['content']}>
          {item.isBorrowed ? <span>Borrowed</span> : <span>Available</span>}
        </div>
      </div>
    </>
  );
}

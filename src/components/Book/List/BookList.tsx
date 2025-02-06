import { useQuery } from '@tanstack/react-query';
import { getItems } from '~/api/item.ts';
import { QUERY_KEY } from '~/api/queryKey.ts';
import { Item } from '~/models/Item.ts';
import ItemItem from '~/components/Book/Item/BookItem.tsx';
import styles from '../../Project/List/ProjectList.module.css';

export default function BookList({ itemCategory }: { itemCategory: number }) {
  const ItemQuery = useQuery<Item[]>({
    queryKey: QUERY_KEY.item.items(itemCategory),
    queryFn: async () => getItems(itemCategory),
  });

  let content;

  if (ItemQuery.isLoading) {
    content = <div>로딩중...</div>;
  } else if (ItemQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (ItemQuery.isSuccess) {
    if (ItemQuery.data.length === 0) {
      console.log('서버 통신 가능, 아직 데이터 없음');
    } else {
      content = (
        <div className={styles['project-list-container']}>
          {ItemQuery.data.map((ItemElement) => (
            <ItemItem key={ItemElement.id} item={ItemElement} />
          ))}
        </div>
      );
    }
  }

  return (
    <>
      <div className={styles['content']}>{content}</div>
    </>
  );
}

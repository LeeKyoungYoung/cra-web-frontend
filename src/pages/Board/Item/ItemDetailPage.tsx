import BoardDetail from '~/components/Board/Detail/BoardDetail.tsx';
import { ITEMCATEGORY } from '~/constants/itemCategory.ts';

export default function ItemDetailPage() {
  return <BoardDetail category={ITEMCATEGORY.ITEM} />;
}

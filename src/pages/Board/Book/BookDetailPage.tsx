import BoardDetail from '~/components/Board/Detail/BoardDetail.tsx';
import { ITEMCATEGORY } from '~/constants/itemCategory.ts';

export default function BookDetailPage() {
  return <BoardDetail category={ITEMCATEGORY.BOOK} />;
}

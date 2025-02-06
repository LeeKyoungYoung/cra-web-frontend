import BoardDetail from '~/components/Board/Detail/BoardDetail';
import { ITEMCATEGORY } from '~/constants/itemCategory';

export default function BookDetailPage() {
  return <BoardDetail category={ITEMCATEGORY.BOOK} />;
}

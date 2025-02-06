import BoardEdit from '~/components/Board/Edit/BoardEdit';
import { CATEGORY } from '~/constants/category';

export default function NoticeEditPage() {
  return <BoardEdit category={CATEGORY.NOTICE} />;
}

import BoardWrite from '~/components/Board/Write/BoardWrite';
import { CATEGORY } from '~/constants/category';

export default function NoticeWritePage() {
  return <BoardWrite category={CATEGORY.NOTICE} />;
}

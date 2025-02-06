import BoardDetail from '~/components/Board/Detail/BoardDetail.tsx';
import { CATEGORY } from '~/constants/category.ts';

export default function NoticeDetailPage() {
  return <BoardDetail category={CATEGORY.NOTICE} />;
}

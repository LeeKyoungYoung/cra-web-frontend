import BoardDetail from '~/components/Board/Detail/BoardDetail';
import { CATEGORY } from '~/constants/category';

export default function NoticeDetailPage() {
  console.log('NoticeDetailPage 렌더링');
  return <BoardDetail category={CATEGORY.NOTICE} />;
}

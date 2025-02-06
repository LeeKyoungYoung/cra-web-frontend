import BoardDetail from '~/components/Board/Detail/BoardDetail';
import { CATEGORY } from '~/constants/category';

export default function AcademicDetailPage() {
  return (
    <>
      <BoardDetail category={CATEGORY.ACADEMIC} />
    </>
  );
}

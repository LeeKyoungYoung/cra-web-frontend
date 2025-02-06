import BoardDetail from '~/components/Board/Detail/BoardDetail.tsx';
import { CATEGORY } from '~/constants/category.ts';

export default function AcademicDetailPage() {
  return (
    <>
      <BoardDetail category={CATEGORY.ACADEMIC} />
    </>
  );
}

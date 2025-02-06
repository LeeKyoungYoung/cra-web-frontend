import BoardEdit from '~/components/Board/Edit/BoardEdit';
import { CATEGORY } from '~/constants/category';

export default function AcademicEditPage() {
  return <BoardEdit category={CATEGORY.ACADEMIC} />;
}

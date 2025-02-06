import BoardEdit from '~/components/Board/Edit/BoardEdit.tsx';
import { CATEGORY } from '~/constants/category.ts';

export default function AcademicEditPage() {
  return <BoardEdit category={CATEGORY.ACADEMIC} />;
}

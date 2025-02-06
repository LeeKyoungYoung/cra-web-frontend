import BoardWrite from '~/components/Board/Write/BoardWrite.tsx';
import { CATEGORY } from '~/constants/category.ts';

export default function AcademicWritePage() {
  return <BoardWrite category={CATEGORY.ACADEMIC} />;
}

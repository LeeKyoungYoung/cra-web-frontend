import BoardContainer from '~/components/Board/BoardContainer.tsx';
import { CATEGORY } from '~/constants/category.ts';

export default function AcademicPage() {
  return <BoardContainer category={CATEGORY.ACADEMIC} />;
}

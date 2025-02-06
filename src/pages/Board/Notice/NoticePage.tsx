import BoardContainer from '~/components/Board/BoardContainer.tsx';
import { CATEGORY } from '~/constants/category.ts';

export default function NoticePage() {
  return <BoardContainer category={CATEGORY.NOTICE} />;
}

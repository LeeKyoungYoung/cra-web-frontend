import BoardWrite from '~/components/Board/Write/BoardWrite.tsx';
import { CATEGORY } from '~/constants/category.ts';

export default function NoticeWritePage() {
  return <BoardWrite category={CATEGORY.NOTICE} />;
}

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/api/queryKey.ts';
import { getBoardCountByCategory } from '~/api/board.ts';
import { Board } from '~/models/Board.ts';
import MainBoardItem from './MainBoardItem.tsx';
import styles from './MainBoardList.module.css';

export default function MainBoardList({ category }: { category: number }) {
  const boardsQuery = useQuery<Board[]>({
    queryKey: QUERY_KEY.board.boardsCount(category),
    queryFn: async () => getBoardCountByCategory(category),
  });

  let content;

  if (boardsQuery.isLoading) {
    content = <div className="loading">데이터를 불러오는 중입니다...</div>;
  } else if (boardsQuery.isError) {
    content = <div className="error">에러가 발생했습니다!</div>;
  } else if (boardsQuery.isSuccess) {
    content = boardsQuery.data
      .slice()
      .reverse()
      .slice(0, 5)
      .map((board, index) => {
        if (board.id === undefined) return null;
        return (
          <div key={`board-${board.id}`}>
            <div className={styles['board-wrapper']}>
              <MainBoardItem board={board} />
            </div>
            {index < boardsQuery.data.length - 1 && (
              <div className={styles['divider']}></div>
            )}
          </div>
        );
      });
  }

  return (
    <div className={styles.container}>
      <div className={styles['divider']}></div>
      <div className={styles['board-list']}>{content}</div>
      <div className={styles['divider']}></div>
    </div>
  );
}

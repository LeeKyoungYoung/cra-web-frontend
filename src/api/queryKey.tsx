export const QUERY_KEY = {
  board: {
    boards: (category: number) => ['board.boards', category] as const,
  },
};

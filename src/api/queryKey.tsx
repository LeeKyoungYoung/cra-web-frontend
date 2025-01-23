export const QUERY_KEY = {
  board: {
    boards: (category: number, currentPage: number) =>
      ['board.boards', category, currentPage] as const,
    boardsCount: (category: number) => ['board.boards', category] as const,
    boardById: (id: number) => ['board.boardById', id] as const,
  },
  comment: {
    commentsById: (id: number) => ['comment.commentsById', id] as const,
    commentsCountById: (id: number) =>
      ['comment.commentsCountById', id] as const,
  },
  project: {
    projects: () => ['project.projects'] as const,
    projectById: (id: number) => ['project.projectById', id] as const,
  },
  havruta: {
    havrutas: () => ['havruta.havrutas'] as const,
    havrutaById: (id: number) => ['havruta.havrutaById', id] as const,
  },
  havrutaBoard: {
    havrutaBoards: (currnetPage: number) =>
      ['havrutaBoard.havrutaBoards', currnetPage] as const,
    havrutaBoardsCount: () => ['havrutaBoard.havrutaBoards'] as const,
    havrutaBoardById: (id: number) =>
      ['havrutaBoard.havrutaBoardById', id] as const,
    havrutaBoardsByHavrutaId: (havrutaId: number, currentPage: number) =>
      [
        'havrutaBoard.havrutaBoardsByHavrutaId',
        havrutaId,
        currentPage,
      ] as const,
    havrutaBoardsCountByHavrutaId: (havrutaId: number) =>
      ['havrutaBoard.havrutaBoardsByHavrutaId', havrutaId] as const,
  },
};

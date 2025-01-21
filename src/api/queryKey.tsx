export const QUERY_KEY = {
  board: {
    boards: (category: number) => ['board.boards', category] as const,
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
    havrutaViewById: (id: number) => ['havruta.havrutaViewById', id] as const,
  },
};

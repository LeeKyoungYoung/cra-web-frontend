interface Comment {
  id?: number;
  userId: number;
  boardId: number;
  content: string;
  commentList: Comment[];
  likeCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type { Comment }; //props 로 전달달

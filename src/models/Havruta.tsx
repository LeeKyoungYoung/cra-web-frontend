interface Havruta {
  id: number;
  userId: number;
  havrutaId: number;
  title: string;
  content: string;
  category: number;
  likeCount?: number;
  view?: number;
  imageUrls?: [string];
  createdAt: Date;
  updatedAt: Date;
  className?: string;
  professor?: string;
}

export type { Havruta };

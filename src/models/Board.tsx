interface Board {
  id?: number;
  userId: number;
  title: string;
  category: number;
  content: string;
  imageUrls: string[];
  createdAt?: Date;
  updatedAt?: Date;

  havrutaId?: number;
  like?: number;
  view?: number;
}

export type { Board };

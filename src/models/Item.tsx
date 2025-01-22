interface Item {
  id?: number;
  name: string;
  description: string;
  itemCategory: number;
  imageUrl: string;
  isBorrowed?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export type { Item };

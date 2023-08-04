export interface IBook {
  id: string;
  author: string;
  image: string;
  name: string;
  views: number;
  description: string;
}

export interface IComment {
  id: string;
  bookId: string;
  userId: string;
  comment: string;
}

export interface IRating {
  id: string;
  bookId: string;
  userId: string;
  rating: number;
}

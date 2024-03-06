export interface Book {
  id: string;
  title: string;
  author: string;
  publishingDate: string;
}

export interface Books {
  bookList: Book[];
  filteredBookList: Book[];
}

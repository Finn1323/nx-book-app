import { Books } from './book.model';
import { v1 as uuidv1 } from 'uuid';

export const bookState: Books = {
  bookList: [
    {
      id: uuidv1().substring(0, 8),
      title: 'The Fellowship of the Ring',
      author: 'J.R.R. Tolkien',
      publishingDate: 'July 29, 1954',
    },
    {
      id: uuidv1().substring(0, 8),
      title: 'The Two Towers',
      author: 'J.R.R. Tolkien',
      publishingDate: 'November 11, 1955',
    },
    {
      id: uuidv1().substring(0, 8),
      title: 'The Return of the King',
      author: 'J.R.R. Tolkien',
      publishingDate: 'October 20, 1955',
    },
    {
      id: uuidv1().substring(0, 8),
      title: 'The',
      author: 'test',
      publishingDate: 'October 20, 1955',
    },
  ],
  filteredBookList: [],
};

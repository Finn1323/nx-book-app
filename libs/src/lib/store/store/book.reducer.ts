import { createReducer, on } from '@ngrx/store';
import { bookState } from './book.state';
import {
  addBook,
  loadBook,
  deleteBook,
  updateBook,
  filterBook,
} from './book.actions';
import { Book } from './book.model';
import { v1 as uuidv1 } from 'uuid';
export const BookReducer = createReducer(
  bookState,
  on(loadBook, (state) => {
    return {
      ...state,
    };
  }),
  on(addBook, (state, action) => {
    const book = { ...action.bookInput };
    book.id = uuidv1().substring(0, 8);
    return {
      ...state,
      bookList: [...state.bookList, book],
    };
  }),
  on(updateBook, (state, action) => {
    const updatedBook = { ...action.bookInput };
    const updatedBookList = state.bookList.map((book) => {
      if (book.id === updatedBook.id) {
        return updatedBook;
      }
      return book;
    });

    return {
      ...state,
      bookList: updatedBookList,
      filteredBookList: updatedBookList,
    };
  }),
  on(deleteBook, (state, action) => {
    const deletedBook = state.bookList.filter((data: Book) => {
      return data.id !== action.id;
    });
    console.log(deletedBook);

    return {
      ...state,
      bookList: deletedBook,
      filteredBookList: deletedBook,
    };
  }),
  on(filterBook, (state, action) => {
    const filteredList = state.bookList.filter((data: Book) => {
      return data.author === action.author;
    });

    return {
      ...state,
      filteredBookList: filteredList,
    };
  })
);

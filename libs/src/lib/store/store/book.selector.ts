import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book, Books } from './book.model';

const getBookState = createFeatureSelector<Books>('book');

export const getBook = createSelector(getBookState, (state) => {
  return state.bookList;
});

export const getBookById = (bookId: string) =>
  createSelector(getBookState, (state) => {
    return state.bookList.find((book: Book) => book.id === bookId) as Book;
  });

export const getAuthor = (author: string) =>
  createSelector(getBookState, (state) => {
    return state.bookList.map((book: Book) => {
      book.author === author;
    });
  });

export const getFilteredBookList = createSelector(getBookState, (state) => {
  return state.filteredBookList;
});

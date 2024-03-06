import { createAction, props } from '@ngrx/store';
import { Book } from './book.model';

export const loadBook = createAction('Loadbook');
export const addBook = createAction('Addbook', props<{ bookInput: Book }>());
export const updateBook = createAction(
  'Updatebook',
  props<{ bookInput: Book }>()
);
export const deleteBook = createAction('Deletebook', props<{ id: string }>());
export const filterBook = createAction(
  'Filterbook',
  props<{ author: string }>()
);

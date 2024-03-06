import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../../store/store/book.model';
import { updateBook } from '../../store/store/book.actions';
import { NgFor, NgIf } from '@angular/common';
import { getBook } from '../../store/store/book.selector';
import { deleteBook } from '../../store/store/book.actions';
import { AddBookComponent } from '../add-book/add-book.component';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { v1 as uuidv1 } from 'uuid';

@Component({
  selector: 'nx-book-app-book',
  standalone: true,
  imports: [NgFor, NgIf, AddBookComponent, FormsModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [Store],
})
export class BookComponent {
  @Input() book: Book = {
    id: uuidv1().substring(0, 8),
    title: '',
    author: '',
    publishingDate: '',
  };

  selectAllBooks$: Observable<Book[]>;
  editingBook: Book;
  constructor(private store: Store<{ book: Book }>) {
    this.selectAllBooks$ = this.store.select(getBook);

    this.editingBook = {
      id: uuidv1().substring(0, 8),
      title: '',
      author: '',
      publishingDate: '',
    }; // Initialize editingBook to an empty object
  }

  toggleEditForm = false;
  editBook(book: Book) {
    this.toggleEditForm = !this.toggleEditForm;
    this.editingBook = { ...book }; // Make a copy of the book object
    console.log(this.editingBook);
  }

  saveEdit() {
    if (this.editingBook) {
      this.store.dispatch(updateBook({ bookInput: this.editingBook }));
    }
    this.toggleEditForm = false;
  }

  deleteBook(id: string) {
    if (confirm('Are you sure you want to delete this book?')) {
      this.store.dispatch(deleteBook({ id: id }));
    }
  }
}

import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Book } from '../../store/store/book.model';
import { Store } from '@ngrx/store';
import { addBook } from '../../store/store/book.actions';

import { NgIf } from '@angular/common';
import { v1 as uuidv1 } from 'uuid';
@Component({
  selector: 'nx-book-app-add-book',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent {
  constructor(
    private builder: FormBuilder,
    private store: Store<{ book: Book }>
  ) {}

  bookForm = this.builder.group({
    id: this.builder.control(uuidv1().substring(0, 8)),
    title: this.builder.control('', Validators.required),
    author: this.builder.control('', Validators.required),
    publishingDate: this.builder.control('', Validators.required),
  });

  toggleAddBook = false;
  AddBook() {
    console.log(this.toggleAddBook);

    this.toggleAddBook = !this.toggleAddBook;
  }

  saveBook() {
    if (this.bookForm.valid) {
      const bookInput: Book = {
        id: uuidv1().substring(0, 8),
        title: this.bookForm.value.title as string,
        author: this.bookForm.value.author as string,
        publishingDate: this.bookForm.value.publishingDate as string,
      };
      this.store.dispatch(addBook({ bookInput: bookInput }));
    }
    this.toggleAddBook = false;
  }
}

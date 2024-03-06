import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { Book } from '../../store/store/book.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { getBook, getFilteredBookList } from '../../store/store/book.selector';
import { AddBookComponent } from '../add-book/add-book.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filterBook } from '../../store/store/book.actions';
import { NgIf, AsyncPipe, NgFor } from '@angular/common';
@Component({
  selector: 'nx-book-app-app-book-list',
  standalone: true,
  imports: [NgFor, NgIf, BookComponent, AddBookComponent, AsyncPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  selectAllBooks$: Observable<Book[]>;
  selectFilteredBooks$: Observable<Book[]>;

  private destroyRef = inject(DestroyRef);

  constructor(private store: Store<{ book: Book }>) {
    this.selectAllBooks$ = this.store.select(getBook);
    this.selectFilteredBooks$ = this.store.select(getFilteredBookList);
  }
  clickedFilter = true;

  allBooks!: Book[];
  allBooksFiltered!: Book[];

  ngOnInit(): void {
    this.selectAllBooks$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((booklist) => {
        this.allBooks = booklist;
        console.log(this.allBooks);
      });

    this.selectFilteredBooks$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((filteredBookList) => {
        this.allBooksFiltered = filteredBookList;
      });
  }

  filterBook(author: string) {
    this.store.dispatch(filterBook({ author: author }));
    console.log(this.allBooksFiltered);
    this.clickedFilter = false;
  }
}

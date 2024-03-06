import { Component } from '@angular/core';
import { BookListComponent } from '../../../../libs/src/lib/components/book-list/book-list.component';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from '../../../../libs/src/lib/components/book/book.component';
import { NgIf, NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    BookComponent,
    BookListComponent,
    NgIf,
    NgFor,
    CommonModule,
  ],
  selector: 'nx-book-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nx-book-app';
}

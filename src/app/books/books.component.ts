import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BOOKS } from './books-data';

interface Book {
  id: number;
  title: string;
  author: string;
}

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  standalone: true
})
export class BooksComponent {
  books: Book[] = BOOKS;

  editingBook: Book | null = null;

  editBook(book: Book): void {
    this.editingBook = { ...book };
  }

  saveBook(book: Book): void {
    const index = this.books.findIndex(b => b.title === book.title && b.author === book.author);
    if (index !== -1) {
      this.books[index] = this.editingBook!;
      this.editingBook = null;
    }
  }

  deleteBook(book: Book): void {
    this.books = this.books.filter(b => b !== book);
  }
}
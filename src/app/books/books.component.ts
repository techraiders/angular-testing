import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';

export interface Book {
  id: number;
  title: string;
  author: string;
}

@Component({
  imports: [FormsModule, CommonModule, RouterModule, BookFormComponent],
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  standalone: true
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.books = this.route.snapshot.data['books'];
  }

  editingBook: Book | null = null;

  editBook(book: Book): void {
    this.editingBook = { ...book };
  }

  saveBook(book: Book): void {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      this.books[index] = this.editingBook!;
      this.editingBook = null;
    }
  }

  deleteBook(book: Book): void {
    this.books = this.books.filter(b => b.id !== book.id);
  }
}
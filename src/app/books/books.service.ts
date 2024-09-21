import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './books.component';
import { BOOKS } from './books-data';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[] = BOOKS;

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }
}
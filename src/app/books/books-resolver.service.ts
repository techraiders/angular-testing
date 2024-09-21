import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from './books.component';
import { BooksService } from './books.service';

@Injectable({
    providedIn: `root`
})
export class BooksResolver implements Resolve<Book[]> {
  constructor(private booksService: BooksService) {}

  resolve(): Observable<Book[]> {
    return this.booksService.getBooks();
  }
}
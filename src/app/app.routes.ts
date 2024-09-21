import { Routes } from '@angular/router';
import { BooksResolver } from './books/books-resolver.service';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: 'books',
    loadComponent: () =>
      import('./books/books.component').then((mod) => mod.BooksComponent),
    resolve: {
      books: BooksResolver
    }
  },
];

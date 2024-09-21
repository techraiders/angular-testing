import { Routes } from '@angular/router';
import { BooksResolver } from './books/books-resolver.service';
import { AuthGuard } from './auth/auth.guard';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: 'books',
    loadComponent: () =>
      import('./books/books.component').then((mod) => mod.BooksComponent),
    resolve: {
      books: BooksResolver
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((mod) => mod.LoginComponent) 
  }
];

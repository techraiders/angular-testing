import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BooksResolver } from './books-resolver.service';
import { BooksService } from './books.service';
import { Book } from './books.component';

describe('BooksResolver', () => {
  let resolver: BooksResolver;
  let booksService: jasmine.SpyObj<BooksService>;

  beforeEach(() => {
    const booksServiceSpy = jasmine.createSpyObj('BooksService', ['getBooks']);

    TestBed.configureTestingModule({
      providers: [
        BooksResolver,
        { provide: BooksService, useValue: booksServiceSpy },
      ],
    });

    resolver = TestBed.inject(BooksResolver);
    booksService = TestBed.inject(BooksService) as jasmine.SpyObj<BooksService>;
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should resolve a list of books', () => {
    const expectedBooks: Book[] = [
      { id: 1, title: 'Test Book', author: 'Test Author' },
    ];
    booksService.getBooks.and.returnValue(of(expectedBooks));

    resolver.resolve().subscribe((books) => {
      expect(books).toEqual(expectedBooks);
    });

    expect(booksService.getBooks).toHaveBeenCalled();
  });
});
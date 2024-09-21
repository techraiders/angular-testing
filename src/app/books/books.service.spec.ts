import { TestBed } from '@angular/core/testing';
import { BooksService } from './books.service';
import { Book } from './books.component';
import { BOOKS } from './books-data';

describe('BooksService', () => {
    let service: BooksService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BooksService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return an Observable of books', (done: DoneFn) => {
        service.getBooks().subscribe((books: Book[]) => {
            expect(books).toEqual(BOOKS);
            done();
        });
    });
});
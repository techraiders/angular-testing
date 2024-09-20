import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of books', () => {
    expect(component.books.length).toBe(3);
  });

  it('should edit a book', () => {
    const book = component.books[0];
    component.editBook(book);
    expect(component.editingBook).toEqual(book);
  });

  it('should save a book', () => {
    const book = { id: 1, title: 'Book 1', author: 'Author 1' };
    component.editBook(book);
    component.editingBook!.title = 'Updated Book 1';
    component.saveBook(book);
    expect(component.books[0].title).toBe('Updated Book 1');
    expect(component.editingBook).toBeNull();
  });

  it('should delete a book', () => {
    const book = component.books[0];
    component.deleteBook(book);
    expect(component.books.length).toBe(2);
    expect(component.books).not.toContain(book);
  });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form.component';

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with title and author controls', () => {
    expect(component.bookForm.contains('title')).toBeTruthy();
    expect(component.bookForm.contains('author')).toBeTruthy();
  });

  it('should make the title control required', () => {
    const control = component.bookForm.get('title');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should validate the minimum length of the title control', () => {
    const control = component.bookForm.get('title');
    control?.setValue('ab');
    expect(control?.valid).toBeFalsy();
    control?.setValue('abc');
    expect(control?.valid).toBeTruthy();
  });

  it('should have author control initially empty', () => {
    const control = component.bookForm.get('author');
    expect(control?.value).toBe('');
  });
});
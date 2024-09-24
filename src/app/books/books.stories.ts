import { moduleMetadata } from '@storybook/angular';
import { BooksComponent } from './books.component';
import { ActivatedRoute } from '@angular/router';

export default {
  title: 'Components/Books',
  component: BooksComponent,
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                books: [
                  { id: 1, title: 'Book One', author: 'Author One' },
                  { id: 2, title: 'Book Two', author: 'Author Two' },
                ],
              },
            },
          },
        },
      ],
    }),
  ],
};

const Template = (args: any) => ({
  component: BooksComponent,
  props: args,
});

// Default story
export const Default = Template.bind({ args: {} });

export const EditingBook = (args: any) => ({
  component: BooksComponent,
  props: {
    editingBook: { id: 1, title: 'Book One', author: 'Author One' },
  },
});

// Story for saving an edited book
export const SavingEditedBook = (args: any) => ({
  component: BooksComponent,
  books: [
    { id: 1, title: 'Edited Book One', author: 'Author One' },
    { id: 2, title: 'Book Two', author: 'Author Two' },
  ],
  props: {
    editingBook: { id: 1, title: 'Edited Book One', author: 'Author One' },
  },
});

// Story for deleting a book
export const DeletingBook = (args: any) => ({
  component: BooksComponent,
  props: {
    books: [
      { id: 1, title: 'Book One', author: 'Author One' },
      { id: 2, title: 'Book Two', author: 'Author Two' },
    ],
  },
});

// Story with an empty list
export const EmptyList = (args: any) => ({
  component: BooksComponent,
  props: {
    books: [],
  },
});

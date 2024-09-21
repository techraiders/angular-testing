import { ROUTES } from './app.routes';

describe('App Routes', () => {
    it('should have a default route redirecting to /books', () => {
        const defaultRoute = ROUTES.find(route => route.path === '');
        expect(defaultRoute).toBeTruthy();
        expect(defaultRoute?.redirectTo).toBe('/books');
        expect(defaultRoute?.pathMatch).toBe('full');
    });

    it('should have a route for /books', () => {
        const booksRoute = ROUTES.find(route => route.path === 'books');
        expect(booksRoute).toBeTruthy();
        expect(booksRoute?.loadComponent).toBeDefined();
    });

    it('should load BooksComponent for /books route', async () => {
        const booksRoute = ROUTES.find(route => route.path === 'books');
        if (booksRoute && booksRoute.loadComponent) {
            const component = await booksRoute.loadComponent() as any;
            expect(component).toBeDefined();
            expect((component as any).name).toBe('BooksComponent');
        }
    });
});
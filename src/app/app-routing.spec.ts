import {
  TestBed,
  async,
  tick,
  inject,
  ComponentFixture,
  fakeAsync
} from "@angular/core/testing";

import { AppComponent } from "./app.component";
import { RouterModule, Router, Routes } from "@angular/router";
import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { Location } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";

@Component({
  selector: "book",
  template: "<div>book</div>"
})
class BookComponent {}

@Component({
  selector: "book-edit",
  template: "<div>book edit</div>"
})
class BookEditComponent {}

@Component({
  selector: "book-list",
  template: "<div>book list</div>"
})
class BookListComponent {}

describe("Routing", () => {
  let router: Router;
  let location: Location;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    let routerStub: Object = {
      navigate: function() {},
      routerState: {}
    };

    spyOn(routerStub, "navigate");

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent,
        BookComponent,
        BookEditComponent,
        BookListComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: "books/:title", component: BookComponent },
          { path: "books/:title/edit", component: BookEditComponent },
          { path: "books", component: BookListComponent },
          { path: "books/new", component: BookEditComponent }
        ])
      ],
      providers: []
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
      });
  }));

  it("Should navigate to the default route", inject(
    [Router, Location],
    fakeAsync((router: Router, location: Location) => {
      router.initialNavigation();
      tick();
      router.navigate(["books"]);
      expect(location.path).toBe("/books");
    })
  ));
});

import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactComponent } from "./contact.component";
import { DebugElement } from "@angular/core";
import { BrowserModule, By } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

describe("ContactComponent", () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [BrowserModule, ReactiveFormsModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance; // contact component test instance
        de = fixture.debugElement.query(By.css("form"));
        el = de.nativeElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'contact page'`, async(() => {
    expect(component.text).toEqual("contact page");
  }));

  it(`should set submitted to true`, async () => {
    component.onSubmit();
    expect(component.submitted).toBe(true);
  });

  it(`Clicking submit button should call onSubmit method`, async () => {
    fixture.detectChanges();
    spyOn(component, "onSubmit");
    el = fixture.debugElement.nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`form should be invalid`, async(() => {
    component.contactForm.controls["email"].setValue("");
    component.contactForm.controls["name"].setValue("");
    component.contactForm.controls["text"].setValue("");
    expect(component.contactForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.contactForm.controls["email"].setValue("dsuser@email.com");
    component.contactForm.controls["name"].setValue("dfgf");
    component.contactForm.controls["text"].setValue("dd");
    expect(component.contactForm.valid).toBeTruthy();
  }));
});

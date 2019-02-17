import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { CustomErrorHandlerService } from "./services/custom-error-handler.service";

@NgModule({
  declarations: [AppComponent, ContactComponent, HomeComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

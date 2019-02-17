import { ErrorHandler } from "@angular/core";

export class CustomErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error) {
    console.log(error);
  }
}

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers.set('Content-Type', 'application/json');
    let authReq = req.clone({ headers });
    authReq = authReq.clone({
      headers: authReq.headers.set(
        'Authorization',
        'Bearer ' + localStorage.getItem('token')
      ),
    });
    return next.handle(authReq);
  }
}

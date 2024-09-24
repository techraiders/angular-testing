import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HeaderInterceptor } from './http-interceptor.service';

describe('HeaderInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HeaderInterceptor,
          multi: true,
        },        
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add Content-Type and Authorization headers', () => {
    localStorage.setItem('token', 'test-token');

    httpClient.get('/test').subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne('/test');

    expect(httpRequest.request.headers.has('Content-Type')).toEqual(true);
    expect(httpRequest.request.headers.get('Content-Type')).toBe(
      'application/json'
    );
    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
    expect(httpRequest.request.headers.get('Authorization')).toBe(
      'Bearer test-token'
    );
  });
});

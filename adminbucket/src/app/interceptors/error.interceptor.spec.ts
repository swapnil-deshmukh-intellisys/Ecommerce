import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ErrorInterceptor } from './error.interceptor';

describe('ErrorInterceptor', () => {
  let interceptor: ErrorInterceptor;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ErrorInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true
        }
      ]
    });

    interceptor = TestBed.get(ErrorInterceptor);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
  });

  // F2P Test: This test will fail initially, then pass after implementation
  describe('HTTP error handling', () => {
    it('should handle 401 unauthorized error', () => {
      const errorMessage = 'Unauthorized access';

      httpClient.get('/api/protected').subscribe(
        () => fail('should have failed with 401 error'),
        (error: HttpErrorResponse) => {
          expect(error.status).toBe(401);
          expect(error.error).toBe(errorMessage);
        }
      );

      const req = httpMock.expectOne('/api/protected');
      req.flush(errorMessage, { status: 401, statusText: 'Unauthorized' });
    });

    it('should handle 500 server error', () => {
      const errorMessage = 'Internal server error';

      httpClient.get('/api/data').subscribe(
        () => fail('should have failed with 500 error'),
        (error: HttpErrorResponse) => {
          expect(error.status).toBe(500);
          expect(error.error).toBe(errorMessage);
        }
      );

      const req = httpMock.expectOne('/api/data');
      req.flush(errorMessage, { status: 500, statusText: 'Internal Server Error' });
    });
  });

  // P2P Test: Successful requests should pass through
  it('should allow successful requests to pass through', () => {
    const mockResponse = { data: 'success' };

    httpClient.get('/api/success').subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('/api/success');
    req.flush(mockResponse);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});

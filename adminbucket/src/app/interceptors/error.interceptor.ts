import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred';

        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          switch (error.status) {
            case 400:
              errorMessage = 'Bad Request: Invalid data provided';
              break;
            case 401:
              errorMessage = 'Unauthorized: Please login to access this resource';
              // Redirect to login page for unauthorized access
              this.router.navigate(['/login']);
              break;
            case 403:
              errorMessage = 'Forbidden: You do not have permission to access this resource';
              break;
            case 404:
              errorMessage = 'Not Found: The requested resource does not exist';
              break;
            case 500:
              errorMessage = 'Internal Server Error: Please try again later';
              break;
            case 503:
              errorMessage = 'Service Unavailable: The server is temporarily unavailable';
              break;
            default:
              errorMessage = error.error || error.message || `Server error: ${error.status}`;
          }
        }

        console.error('HTTP Error:', errorMessage, error);
        
        // Return the error message to the subscriber
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}

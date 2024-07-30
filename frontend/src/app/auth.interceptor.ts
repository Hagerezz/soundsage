import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Clone the request to add the new header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer YOUR_AUTH_TOKEN` // Replace with actual token logic
    }
  });

  // Send the newly created request
  return next(authReq).pipe(
    catchError((error) => {
      // Handle the error here
      console.error('An error occurred:', error.message);
      return throwError(() => error); // Rethrow the error for further handling
    })
  );
};

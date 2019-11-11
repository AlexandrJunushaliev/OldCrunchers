import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //предположим, что токен только один
    //FIX! для двух токенов
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return next.handle(request);
  }
}

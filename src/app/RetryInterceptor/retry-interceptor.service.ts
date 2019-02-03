import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry ,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RetryInterceptorService implements HttpInterceptor
{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    return next.handle(req).pipe(retry(3));

  }
  constructor() { }
}

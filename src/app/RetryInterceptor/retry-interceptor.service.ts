import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetryInterceptorService implements HttpInterceptor
{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(req).pipe(retry(3));

  }
}


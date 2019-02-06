import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable, pipe } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AjaxBusyNotifierService } from './ajax-busy-notifier.service'



@Injectable({
  providedIn: 'root'
})
export class AjaxBusyIdentifierInterceptorService implements HttpInterceptor {

  constructor(private abns: AjaxBusyNotifierService) { }

  requestCounter = 0;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.beginRequest();
    return next.handle(req).pipe(
      
      finalize(() => {
        this.endRequest();
      })
    );
  }

  beginRequest() {
    this.requestCounter = Math.max(this.requestCounter, 0) + 1;

    if (this.requestCounter === 1) {
      this.abns.busy.next(true);
    }
  }

  endRequest() {
    this.requestCounter = Math.max(this.requestCounter, 1) - 1;

    if (this.requestCounter === 0) {
      this.abns.busy.next(false);
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, retry, debounceTime } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class ErrorNotifierService implements HttpInterceptor {

  constructor(private toasterService: ToastrService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(request).pipe(
      tap(
        event => { },
        error => {
          if (error instanceof HttpErrorResponse) {
            this.toasterService.error(error.message, error.name, { closeButton: true });
          }
        }
      ));

  }


}

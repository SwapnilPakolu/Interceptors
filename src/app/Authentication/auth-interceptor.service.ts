import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { AuthService } from './auth.service';
//import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService  implements HttpInterceptor {
 constructor(public auth: AuthService//,public router: Router
) {}
 intercept(request: HttpRequest<any>, next: HttpHandler): 
Observable<HttpEvent<any>> 
{
  if(this.auth.isAuthenticated)
  {
    request = request.clone({ headers: request.headers.set( 'Authorization', 'Bearer '+this.auth.authToken)});
  }
  else
  {
  //  this.router.navigate(['LoginPage']);
  }
return next.handle(request);
}
}
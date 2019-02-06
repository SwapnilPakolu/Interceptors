import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated:boolean = false;
  authToken:string = 'RandomTextdffasdhfkjfwqq1452fdsafas34fdsafadfasf55459tewvadf941sfhasdkjfhwkjh';
  constructor() { }
}

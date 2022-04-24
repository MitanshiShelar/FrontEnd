import { Injectable } from '@angular/core';
import {HttpHandler,HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  intercept(request:HttpRequest<any>,next:HttpHandler){
    let tokenizedRequest = request.clone({
      setHeaders : {
        authorization : "" + localStorage.getItem("jwt-token")
      }
    });
    return next.handle(tokenizedRequest);
  }

  constructor() { }

}

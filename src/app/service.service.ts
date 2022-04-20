import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Signup ="http://localhost:3000/user/signup";
  Signin ="http://localhost:3000/user/signin";
  pApi ="http://localhost:3000/product//view-product";
  cApi = "http://localhost:3000/category/view-category"

  constructor(private http:HttpClient) { }
  signup(name:any,email:any,password:any,mobile:any):Observable<any>{
    return this.http.post(this.Signup,{name,email,password,mobile})
  }

  getProduct():Observable<any>{
    return this.http.get(this.pApi);
  }

  getCategory():Observable<any>{
    return this.http.get(this.cApi);
  }

  checktoken(){
    return !!localStorage.getItem('jwt-token');
  }
  
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Signup ="http://localhost:3000/user/signup";
  Signin ="http://localhost:3000/user/signin";

  constructor(private http:HttpClient) { }
  signup(name:any,email:any,password:any,mobile:any):Observable<any>{
    return this.http.post(this.Signup,{name,email,password,mobile})
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Signup ="http://localhost:3000/user/signup";
  pApi ="http://localhost:3000/product//view-product";
  cApi = "http://localhost:3000/category/view-category"
  siginApi = "http://localhost:3000/user/signin";
  cartApi = "http://localhost:3000/cart/add-to-cart";
  cpApi= "http://localhost:3000/product/show-products";
  viewCart = "http://localhost:3000/cart/view";
  remove_to_cart = "http://localhost:3000/cart/delete-cart";

  constructor(private http:HttpClient) { }


  view_cart(uId:any):Observable<any>{
    return this.http.post(this.viewCart,{uId:uId});
  }

  removeToCart(pId:any,uId:any):Observable<any>{
    return this.http.post(this.remove_to_cart,{pId:pId,uId:uId});
  }

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

  getUserId(){
    console.log(sessionStorage.getItem('userId'))
    return sessionStorage.getItem('userId');
  }

  categoryProduct(catId:any):Observable<any>{
    console.log("service.......")
    console.log(catId);
    console.log("service.......")
    return this.http.post(this.cpApi,{catId});
  }

  signin(e:string, p:string):Observable<any>{
    console.log("Service---called......");
    window.alert("called......");
    let user = {
      email:e,
      password:p
    }
    console.log(user);
    return this.http.post<any>(this.siginApi,user);
  }

  addToCart(pId:any,uId:any):Observable<any>{
    return this.http.post(this.cartApi,{uId,pId});
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService) { }
 ngOnInit(){}
  public email:string = '';
  public password:string = '';

  signin(){
    alert("your email : "+this.email);

    this.service.signin(this.email,this.password)
    .subscribe(data => {
      console.log(data);
      alert('inside subscribe')
      console.log(data);

      if(data.status == "login success"){
        alert("Login success")
        this.router.navigate(['']);
        sessionStorage.setItem('userId',data.current_user._id);
        localStorage.setItem("jwt-token",data.token);
      }else{
        alert("invalid credentials");
      }

    },err=>{
      window.alert(err.status);
      console.log(err);
    });
  }

  signup(){
    this.router.navigate(['/signup']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  public name: string = "";
  public email: string = "";
  public password: string = "";
  public mobile: string = "";

  signup(name: string, email: string, password: string, mobile: string){
    this.email=email;
    this.name=name;
    this.password=password;
    this.mobile=mobile;
    this.service.signup(name, email, password, mobile);
    this.router.navigate(['signin']);
  }

}

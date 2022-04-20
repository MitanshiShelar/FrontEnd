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

  ngOnInit(): void {
  }

  public email:string = '';
  public password:string = '';

  signin(email:string, password:string){
    this.email = email;
    this.password = password;
    
  }

  signup(){
    this.router.navigate(['/signup']);
  }

}

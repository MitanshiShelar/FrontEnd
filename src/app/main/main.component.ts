import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service:ServiceService,private route:Router) {
    this.service.getProduct()
    .subscribe(data=>{
      console.log(data);
      this.products=data;
      console.log(data);
    })

    this.service.getCategory()
    .subscribe(data=>{
      this.categories = data;
    });
  }

  ngOnInit(): void {
  }

  public categories:any;
  public products:any;
  public model_product:any;

  modal(product:any){
    this.model_product=product;
  }

  add(mode:string){

    if(this.service.checktoken()){
      alert("inservice")
      if(mode == "cart"){
        alert('added in cart')
      }
    }else{
      alert("not in a user")
      this.route.navigate(['/signin']);
    }

  }

}

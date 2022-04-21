import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public totalRecords?: number;
  page:number = 1;

  constructor(private service:ServiceService,private route:Router) {

    this.service.getProduct()
    .subscribe(data=>{
      console.log(data);
      this.products=data;
      this.totalRecords = data.products.length;
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
  public bgImage:any;

  modal(image1:any,image2:any,image3:any,image4:any){
    this.model_product= {image1,image2,image3,image4}
  }

  bigshow(n:number){
    this.bgImage = this.model_product.image1;
    if(n == 1){
      this.bgImage = this.model_product.image1;
    }
    else if(n == 2){
      this.bgImage = this.model_product.image2;
    }
    else if(n == 3){
      this.bgImage = this.model_product.image3
    }
    else if(n == 4){
      this.bgImage = this.model_product.image4;
    }
  }

  add(mode:string,product:any|null){

    if(this.service.checktoken()){
      
      if(mode == "cart"){
        alert('added in cart')
      }
    }else{
      alert("not in a user")
      this.route.navigate(['/signin']);
    }

  }

}

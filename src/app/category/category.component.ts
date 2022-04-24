import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public totalRecords?: number;
  page:number = 1;

  constructor(private service:ServiceService,route:ActivatedRoute) {
    console.log(route.snapshot.paramMap.get('id'))
    this.service.categoryProduct(route.snapshot.paramMap.get('id'))
    .subscribe(product=>{
      console.log("............")
      console.log(product)
      this.products=product;
      this.products=product;
      this.totalRecords = product.products?.length;
    });
    console.log("product : "+this.products)

  }

  ngOnInit(): void {
  }
  public products:any = '';
  public categories:any ='';
  public model_product:any ='';
  public bgImage:any ='';

  modal(image1:any,image2:any,image3:any,image4:any){
    this.model_product= {image1,image2,image3,image4}
    this.bgImage = image1;
  }

  bigshow(n:number){
    
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

  addToCart(productId:any){
    var userId = this.service.getUserId();
    console.log("productId : "+productId);
    console.log("userId : "+userId);
    if(userId){
      this.service.addToCart(productId,userId)
      .subscribe(data =>{
        console.log(data);
      })
    }
  }

}

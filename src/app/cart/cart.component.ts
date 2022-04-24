import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service: ServiceService) {
    var userId = this.service.getUserId();

    this.service.view_cart(userId)
    .subscribe(data => {
      console.log(userId);
      console.log(data);
      this.products = data;
    })

    

  }

  ngOnInit(): void {
  }

  public products:any='';
  public quantity = new Array();
  public total_product:any;
  public total_price:any;

  remove_to_cart(productId:any,i:any){
    var userId = this.service.getUserId();
    this.service.removeToCart(productId,userId)
    .subscribe(data =>{
      this.products.productlist.splice(i,1);
      console.log(data.message);
    })
  }

  update_quantity(n:any,i:any){
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service:ServiceService) {
    this.service.getProduct()
    .subscribe(product =>{
      this.products = product;
    })
   }

  ngOnInit(): void {
  }

  public products:any;

}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


// [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  public ELEMENT_DATA:any;

  displayedColumns: string[] = ['image', 'name', 'price', 'brand'];
  dataSource:any;

  constructor(private service:ServiceService) { 
    this.service.getProduct()
    .subscribe(product=>{
      this.products=product;
      this.ELEMENT_DATA = this.products;
    })
  }

  applyfilter(filterValue:any){
    console.log(filterValue.length);
    this.dataSource = new MatTableDataSource (this.ELEMENT_DATA);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if(filterValue.length <= 0){
      this.dataSource = null;
    }
  }

  ngOnInit(): void {
  }

  products:any;
  search_field:any;
  searched_products:any;

  // search(){
    
  //   for (let i=0; i<this.products.length; i++){
  //     if(this.products[i].price == this.search_field){
  //       this.searched_products = this.products[i];
  //       console.log(this.searched_products)
  //     }
  //   }
  // }

  show(){

  }

}

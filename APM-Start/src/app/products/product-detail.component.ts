import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { ProductService } from "./product.service";

import {IProduct} from './product'

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string ='Product Details';
  product: IProduct;
  products: IProduct[]=[];

  constructor(private _route:ActivatedRoute ,
              private _router: Router ,
              private _productService: ProductService) { 
                console.log(this._route.snapshot.paramMap.get('id'));
              }

  ngOnInit() {
    let id= +this._route.snapshot.paramMap.get('id');
    this.pageTitle +=`:${id}`;

    this._productService.getproducts().subscribe(products => 
      {
      this.products=products ;
 //     console.log ("hello" +this.products[0].productName );
 //     let productIndex=this.products.findIndex(product=>product.productId===id);
      this.product=products[this.products.findIndex(product=>product.productId===id)];
      }
      
    )
  }
onBack(): void {
  this._router.navigate(['/products']);
}

}


// => we called it as FAT arrow 
// its approach to write a Anynomious function (function which has no name )
// Its introdices in ECMA6 

/*
this word its always represent object 
var x x function (a){
return a;
}
by Fat arrow 
var x=a=>a


Triple equal sign in javascript means equality without type coercion.
Three equal signs indicates both the value and type are equal.

For example:
1=="1"     // true, automatic type coersion
1==="1"    // false, not the same type
*/
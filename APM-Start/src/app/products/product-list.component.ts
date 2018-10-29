import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector:'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string='Product List';
    errorMessage: string;
    imageWidth: number=50;
    imageMargin: number= 2;
    showImage: boolean=false ;
    filteredProducts: IProduct[];
    _listFilter: string ;
 //   private _productService;
    message: string;
 /*   products: any[]= [
        {
            "productId":2,
            "productName": "Garden cart",
            "productCode" : "GDN-0023",
            "releaseDate" : "March 18,2016",
            "description" : "15 Gallon capacity",
            "price": 32.99 ,
            "starRating" : 2.2 ,
            "imageUrl" :"https://openclipart.org/image/300px/svg_to_png/58471/garden-cart.png"
        },
        {
            "productId":5,
            "productName": "Hammer",
            "productCode" : "TBX-0048",
            "releaseDate" : "March 21,2016",
            "description" : "Curved Claw steal hammer",
            "price" : 8.99,
            "starRating" :3.8,
            "imageUrl" :"https://openclipart.org/image/100px/svg_to_png/73/freehammer.png"
        }
    ];
*/
     
products: IProduct[]=[];

    toggleImage(): void {
        this.showImage=!this.showImage;
    }


    ngOnInit(): void{
        console.log('In OnInit');
    //    this.products=this._productService.getproducts();

    this._productService.getproducts().subscribe(products => 
        {
        this.products=products ;
        this.filteredProducts=this.products;
        }
        ,

        error => this.errorMessage=<any>error);
    

    }

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter=value;
        this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter) : this.products;
// Well, the ternary operator in Java/ JavaScript  acts like this..
// return_value = (true-false condition) ? (if true expression) : (if false expression);

    }
 
// use this command to generate file in all attempt like (CSS/HTML/specs.ts/TS)  ng g c products/product-detail.component --flat 

 /*   constructor()
    {
        this.filteredProducts = this.products;
        this.listFilter='cart';
    }
*/

/* 

The constructor method is not actually an Angular 2 method. 
It is a predefined method in a TypeScript class which is called when 
the class is instantiated. The constructor’s purpose is to help prepare the creation
 of a new instance of the class. In the context of Angular 2 it can be used to properly initialize fields.
  Angular 2’s DI (dependency injection) also tries to find providers 
  that match the types of the constructor’s parameters, 
  resolves them, and passes them to the constructor as arguments.

*/

    constructor(private _productService: ProductService){
        this.filteredProducts = this.products;
        this.listFilter='cart';
    }


    performFilter(filterBy:string): IProduct[]{
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product:IProduct) =>
             product.productName.toLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string) :void{
        this.pageTitle='Product List: ' +message;
        }

}

// Free Restful Webservice http://services.groupkt.com/state/get/IND/all
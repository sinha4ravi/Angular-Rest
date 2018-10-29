import {Injectable} from '@angular/core' ;
import { IProduct } from './product';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService{

    private _productUrl='./api/products/products.json'
    constructor(private _http: HttpClient){}

    getproducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log('All: ' +JSON.stringify(data)))
        .catch(this.handleError);
    }
    

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }

    /*
    getproduct(): IProduct[]{
    return  [
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
    }

*/

}
import {Injectable} from '@angular/core' ;
import {Http, Response ,Headers ,RequestOptions} from '@angular/http';
import {Observable } from 'rxjs/Observable';
import {IStarWars} from './star-wars'
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService{
    baseUrl: string ='https://swapi.co/api/starships/9/';

// free API : https://www.goodreads.com/author/show.xml?id=4432&key=3pdueL4dXua2r2hINHA

    constructor(private _http:Http){} 

    getStarWarsInfo(): Observable<IStarWars[]>{




        
        return this._http.get(this.baseUrl 
            
          ).map((response: Response)=><IStarWars[]>response.json());
    }
}



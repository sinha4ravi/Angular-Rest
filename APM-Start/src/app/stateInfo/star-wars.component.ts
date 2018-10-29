import { Component, OnInit } from '@angular/core';
import { StarWarsService } from "./star-wars.service";
import { IStarWars } from "./star-wars";

@Component({
    selector: 'pm-starwars',
    templateUrl: './star-wars.component.html',
})
export class StarWarsInfoComponent implements OnInit{
   
    starWars: IStarWars[]=[ ];
    errorMessage: string;
    
    ngOnInit() {
    console.log('In state info component');
    this._StarWarsService.getStarWarsInfo().subscribe((starWars) => this.starWars= starWars );
    }
    
    constructor(private _StarWarsService: StarWarsService){
    this.starWars= this.starWars;
    }
}

// ng  g c componentName   to generate new component set with html/css/ts here g for generate and c for component 
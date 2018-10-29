import { Component } from '@angular/core';
// Here Component is Member Name and @angular/core is Angular Library module name 
import { ProductService } from './products/product.service';
import { StarWarsService } from './stateInfo/star-wars.service';

// @ symbol called a decorator and  They allow us to tell Angular that a particular class is a component, or module
@Component({
  selector: 'pm-root',
  template:`
  <div>
    <nav class='navbar navbar-default'>
      <div class= 'container-fluid'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav navbar-nav'>
        <li><a [routerLink]="['/welcome']">Home</a></li>
        <li><a [routerLink]="['/products']">Products List</a></li>
        <li><a [routerLink]="['/stateinfo']">State List</a></li>
      </ul>
      </div>
     </nav> 
     <div class='container'>
      <router-outlet></router-outlet>
     </div>
  </div>
  `,
  providers: [ProductService , StarWarsService] 
})
// in template starting those are Back Ticks (Left side top in keypad) not Quotes 

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}

// Angular CLI stands for Angular Command Line Interface
/*
<div>
    <h1>
      {{pageTitle}}
    </h1>
    <pm-products></pm-products>
  </div>
*/
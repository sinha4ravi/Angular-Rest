import {Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform
{
    transform(value: string, character: string): string {
        return value.replace(character ,' ');
    }
}


/*  Difference between Constructor and ngOnInit

The Constructor is a default method of the class that is executed when the class is instantiated and
 ensures proper initialization of fields in the class and its subclasses. 
 Angular or better Dependency Injector (DI) analyzes the constructor parameters and 
 when it creates a new instance by calling new MyClass() it tries to find providers that match 
 the types of the constructor parameters, resolves them and passes them to the constructor like

new MyClass(someArg);
ngOnInit is a life cycle hook called by Angular2 to indicate that Angular is done creating the component.

We have to import OnInit in order to use like this (actually implementing OnInit is not mandatory but considered good practice):

import {Component, OnInit} from '@angular/core';
then to use the method of OnInit we have to implement in the class like this.

export class App implements OnInit{
  constructor(){
     //called first time before the ngOnInit()
  }

  ngOnInit(){
     //called after the constructor and called  after the first ngOnChanges() 
  }
}
Implement this interface to execute custom initialization logic after your directive's data-bound properties have been initialized. ngOnInit is called right after the directive's data-bound properties have been checked for the first time, and before any of its children have been checked. It is invoked only once when the directive is instantiated.

Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor. The constructor should only be used to initialize class members but shouldn't do actual "work".

So you should use constructor() to setup Dependency Injection and not much else. ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.

F

*/
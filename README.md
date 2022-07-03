# About Project
An Angular one-page e-commerce app and the data is fetching from a JSON file(Data.json), which is made up of a group of components that work together .It consists of the following Two Routes:

1-Product List: Display all products
2-Cart : Display Item on  Cart and Form for Register

There are 7 Components inside components directory

1-Cart
2-Cart-Item
3-Confirmation
4-Product-Item
5-Product-item-list
6-Product-list
7-layout

There are three models
1-cart-details
    fullName: string;
    address: string;
    creditCardNumber: string;
2-cart-model
    id: string;
    products: any;
    details: CartDetails;
3-product
    id: number;
    name: string;
    price: number;
    url: string,
    description: string
There two services:Cart Service and Product Service








# MYStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

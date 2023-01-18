import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categories : Category [] = [
    {id:1,name:"Produção Própria"},
    {id:2,name:"Nacional"},
    {id:3,name:"Importado"},
    {id:4,name:"Premium"},
  ];

  product : Product = {} as Product;
  products : Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  saveProduct(){
    this.product.id = this.products.length + 1;
    this.products.push(this.product);
    this.product = {} as Product;

    console.log("Novo produto cadastrado. Total produtos: " +  this.products.length);
  }

}

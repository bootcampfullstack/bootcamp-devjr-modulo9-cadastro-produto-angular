import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  categories : Category [] = [];

  @Input()
  product ?: Product;
  
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.product);
  }

}

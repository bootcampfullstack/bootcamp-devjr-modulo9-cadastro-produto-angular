import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  categories : Category [] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}

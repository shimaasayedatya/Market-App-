import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {


  product= JSON.parse(localStorage.getItem('ProductDetails'));

  constructor() { }

  ngOnInit() {
    
  }

}

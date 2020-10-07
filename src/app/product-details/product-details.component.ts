import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // Member Variables
  product;  // How does product details component get the specific product?
   addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
   }
  // Member Functions
  //addToCart(product){ 
   // this.cartService.addToCart(product); 
    //window.alert('Your product has been added to the //cart');
    //};

  // activated route
  constructor( 
    private route: ActivatedRoute,  /**! activated product id provided via url */
    private cartService: CartService)  /**inject service so it can be used from details view*/
   { }
  
  ngOnInit() {

    /** subscribe to route parameters and fetch the product based on productId
     * ref: https://angular.io/start/start-routing#using-route-information
     */
    
    // Set value of product using the product id provided by the "ActivatedRoute"
    this.route.paramMap.subscribe(params =>{ this.product = products[+params.get('productId')]; });


  }



  
}
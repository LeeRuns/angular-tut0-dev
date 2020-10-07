import { Component, OnInit } from "@angular/core";
import {FormBuilder } from '@angular/forms';

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  // Member Variables
  items;
  checkoutForm;
  // Member Functions

  // CONSTRUCTOR //
  constructor(
    private cartService: CartService,  /** inject CartService */
    private formBuilder: FormBuilder  /** inject FormBuilder Service */
  ) { 

    /**! Setup form fields to be constructed on view */
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    //  Processes checkout data here
      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();

      console.warn('Your order ahd been submitted', customerData);
  }
}

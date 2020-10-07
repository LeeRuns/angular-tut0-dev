import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  // Member Variables
  items;
  // Member Functions

  // CONSTRUCTOR //
  constructor(private cartService: CartService) /** inject CartService */
  { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}

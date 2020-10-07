import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";  
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

// decorator for class "ProductAlertsComponent"
@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit 
{
  /**
   * @Input() decorator indicates that the property value passes in from the component's parent, the product list component.
   * 
   * @Output() has something to do with modigying the dom
   *           i don't get it???
   */
  @Input() product;
  @Output() notify = new EventEmitter();   //this is the "notify.emit() method from html"
  constructor() {}
  ngOnInit() {
  }

}

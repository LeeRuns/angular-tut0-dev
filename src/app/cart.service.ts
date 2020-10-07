import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // needed 2 lookup shipping rates


/** ??? the @Injectable providedIn is important so that the project can find the Cart Service.  When this was missing i was having painful bugs */
@Injectable({
  providedIn: 'root'  
})
export class CartService {
  /**Shopping cart service.
   * /brief. stores list of items in cart & has functions for 
   * retrieving, appending to, and updating that list
   */
  
  items=[];/**! Array for products in cart */

  /**! addToCart(). Add item to cart */
  addToCart(product){ this.items.push(product)}

  /**! clearCart. removes all items in existing cart*/
  clearCart(){ this.items=[];}

  /**! getItems() returns array of items in existing cart */
  getItems(){ return this.items;}

  /**! getShippingPrices() returns cost json of shipping prices */
  getShippingPrices(){ return this.http.get('/assets/shipping.json'); }

  constructor(private http: HttpClient // injecting httpclient into service
  ){} 

}
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  [x: string]: any;
  cart!: Cart;
constructor(private cartService: CartService){
  this.setCart()
}
ngOnInit(): void {
    
}

removeFromCartFunction(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.food.id)
  this.setCart();
}

changeQuantity(cartItem:CartItem, quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id, quantity)
  this.setCart();
  }

 
setCart(){
  this.cart = this.cartService.getCart();

}

}

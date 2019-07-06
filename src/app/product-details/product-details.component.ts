import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;
  star;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => (
      this.product = products[+params.get('productId')]
    ));
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
  addToWishlist(star) {
    window.alert('Your product has been added to the wishlist!');
    this.wishlistService.addToWishlist(star);
  }

}

import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  stars;

  constructor(
    private wishlistService: WishlistService,

  ) {
    this.stars = this.wishlistService.getItems();
  }

  clearWishlist() {
    this.wishlistService.clearWishlist();
    this.stars = this.wishlistService.getItems();
  }

  removeItem(star) {
    this.wishlistService.removeItem(star);
    return this.stars;
  }

  ngOnInit() {
  }

}

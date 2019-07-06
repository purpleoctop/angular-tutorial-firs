import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class WishlistService  {
    stars = [];

    constructor(
    ) { }

    addToWishlist(product) {
        this.stars.push(product);
    }

    getItems() {
        return this.stars;
    }

    clearWishlist() {
        this.stars = [];
        return this.stars;
    }


    removeItem(product) {
        this.stars.splice((this.stars.indexOf(product)), 1);
        return this.stars;
    }

}

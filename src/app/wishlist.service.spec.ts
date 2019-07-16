import { WishlistService } from './wishlist.service';

describe('wishlist service tests', () => {
    let wishlistService: WishlistService;
    let product = {
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras"
    }

    beforeEach(() => {
        wishlistService = new WishlistService();
    });
    it('property starts should be empty array at the begining', () => {
        expect(wishlistService.stars).toEqual([])
    });
    it('addToWishlist method should add product in favourite products', () => {
        wishlistService.addToWishlist(product);
        expect(wishlistService.stars).toEqual([product])
    });
    it('getItems method should return favourite products array', () => {
        expect(wishlistService.getItems()).toBeDefined()
    });
    it('clearWishList method should clear favourite products array', () => {
        wishlistService.clearWishlist()
        expect(wishlistService.stars).toEqual([])
    });
    it('removeItems method should return favourite products array', () => {
        wishlistService.removeItem(product)
        expect(wishlistService.stars).toEqual([])
    });

});

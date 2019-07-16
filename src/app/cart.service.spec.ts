import { CartService } from './cart.service';

describe('Cart service tests', () => {
    let cartService: CartService;
    let product = {
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras"
    }

    beforeEach(() => {
        cartService = new CartService();
    });
    it('property items should be empty array at the begining', () => {
        expect(cartService.items).toEqual([])
    });
    it('addToCart method should add product in cart', () => {
        cartService.addToCart(product);
        expect(cartService.items).toEqual([product])
    });
    it('getItems method should return cart products array', () => {
        expect(cartService.getItems()).toBeDefined()
    });
    it('clearCart method should clear cart products array', () => {
        cartService.clearCart()
        expect(cartService.items).toEqual([])
    });
    it('removeItem method should return favourite products array', () => {
        cartService.removeItem(product)
        expect(cartService.items).toEqual([])
    });

});
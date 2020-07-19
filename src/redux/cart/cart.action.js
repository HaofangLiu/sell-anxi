import { CartAction } from "./cart.type";

export const toggleCartHidden = () => ({
  type: CartAction.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
  type: CartAction.ADD_ITEM,
  payload: item,
});

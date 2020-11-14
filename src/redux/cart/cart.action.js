import { CartAction } from "./cart.type";

export const toggleCartHidden = () => ({
  type: CartAction.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
  type: CartAction.ADD_ITEM,
  payload: item,
});

export const clearFromCart = (item) => ({
  type: CartAction.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartAction.REMOVE_ITEM,
  payload: item,
});

import { createSelector } from "reselect";

//input selector
//selectXXXX
//get the whole state and return the slice of it
const selectCart = (state) => state.cart;

// const selectUser = state=> state.user;

export const selectCartItem = createSelector(
  [selectCart], //基于state中的cart
  (cart) => cart.cartItem //依赖于cart中的cartItem的数据
  //其中cart可以理解为就是上面方括号中所传进来的值，然后这个selector要对这个值做什么操作
);

export const selectCartTotal = createSelector([selectCartItem], (cartItem) =>
  cartItem.reduce((accumalatedTotalMoney, item) => {
    return accumalatedTotalMoney + item.price * item.quantity;
  }, 0)
);

export const selectCartItemCount = createSelector(
  [selectCartItem], //依赖于上面的cart中的cartItem的数据

  //计算count基于传进来的数据，接收的参数基于上面传进来的参数。
  (cartItems) =>
    cartItems.reduce((accumalatedQuantity, item) => {
      return accumalatedQuantity + item.quantity;
    }, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

import { createSelector } from "reselect";

const selectUser = (state) => state.user;

// const selectCart = state => state.cart;

export const selectUserL = createSelector(
  [selectUser],
  (user) => user.currentUser
);

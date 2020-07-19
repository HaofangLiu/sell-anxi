export const addItemToCart = (cartItems, cartItemToAdd) => {
  let existingItem = cartItems.find((item) => {
    return item.id === cartItemToAdd.id;
  });

  if (existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// export const deleteItem = (cartItems, cartItemToDelete) => {
//     let existingItem = cartItems.find((item) => {
//       item.id === cartItemToDelete.id;
//     });

//     if (existingItem) {
//       return cartItems.map((cartItem) => {
//         cartItem.id === cartItemToAdd.id
//           ? {
//               ...cartItem,
//               quantity: cartItem + 1,
//             }
//           : cartItem;
//       });
//     }
//   };

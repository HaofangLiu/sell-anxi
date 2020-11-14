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

export const deleteItem = (cartItems, cartItemToDelete) => {
  let existingItem = cartItems.find((item) => {
    return item.id === cartItemToDelete.id;
  });

  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToDelete.id);
  }

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === cartItemToDelete.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};

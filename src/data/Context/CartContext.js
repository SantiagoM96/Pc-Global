import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [], });

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      console.error('The product is already in the cart, please check it')
    } else {
      setCart((cart) => [...cart, { ...item, quantity }])
    }
  }

  const removeProduct = (productId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== productId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0)
  const totalPrice = cart.reduce((total, product) => total + product.quantity * product.price, 0)


  return (
    <CartContext.Provider value={{ cart, totalPrice, totalQuantity, addProduct, removeProduct, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

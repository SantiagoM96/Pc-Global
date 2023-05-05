import { createContext, useState } from "react";
import { showToast } from "../../animations/showToast";

export const CartContext = createContext({ cart: [], });

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);


  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      showToast('error', 'The product is already in the cart, please check it')
    } else {
      setCart((cart) => [...cart, { ...item, quantity }])
      showToast('success', 'Successfully added')
    }
  }

  const removeProduct = (productId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== productId);
    setCart(cartUpdated);
    showToast('success', 'Successfully deleted')
  };

  const clearCart = () => {
    setCart([]);
    showToast('success', 'Cart Deleted')
  };

  const isInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0)
  const totalPrice = cart.reduce((total, product) => total + product.quantity * product.price, 0)


  return (
    <CartContext.Provider value={{ cart, totalPrice, totalQuantity, addProduct, removeProduct, clearCart }}> {/* funciones compartidas a lso componentes hijos a través de value y un objeto que las contiene*/}
      {children}
    </CartContext.Provider>
  );
};

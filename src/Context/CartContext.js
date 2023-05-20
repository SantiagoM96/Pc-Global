import { createContext, useState, useEffect } from "react";
import { showToast } from "../animations/showToast"

const CartContext = createContext({ cart: [], });

const CartProvider = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("MY_CART");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("MY_CART", JSON.stringify(cart));
    }
  }, [cart, isInitialized]);

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      showToast('error', 'The product is already in the cart, please check it')
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
    <CartContext.Provider value={{ cart, totalPrice, totalQuantity, addProduct, removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
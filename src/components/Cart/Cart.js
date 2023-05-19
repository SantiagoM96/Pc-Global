import { useState, useContext, useEffect } from "react";
import { showToast } from "../../animations/showToast";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Loader/Loader";
import Button from '../Button/Button'
import CartProduct from "./CartProduct";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
  }, [])

  const handleClearCart = () => {
    clearCart();
    showToast('success', 'Cart Deleted')
  }

  return (
    <section className="cart">
      {isLoading ?
        <Loader isLoading={isLoading} /> :
        totalQuantity === 0 ? < EmptyCart /> :
          <>
            <Link to={`/`}>
              <FontAwesomeIcon icon={faAngleLeft} className="back" title="Back" />
            </Link>
            <h1>MY CART</h1>
            <article className="productsContainer">
              {cart.map(p => <CartProduct key={p.id} {...p} />)}
            </article>
            <article className="totals">
              <div className="priceQuantity">
                <p>{`Total: ${totalQuantity} ${totalQuantity === 1 ? "Item" : "Items"}`}</p>
                <span>US$ {totalPrice} </span>
              </div>
              <div className="btns">
                <Button cName="darkBtn clear" label="Delete" callBack={handleClearCart} />
                <Link to={`/checkout`} className="darkBtn checkOut">
                  Checkout
                </Link>
              </div>
            </article>
          </>
      }
    </section>
  );
};

export default Cart;


import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  return (
    <div className="navCart">
      <img src="https://i.postimg.cc/rpvzCFhk/carrito-de-compras.png" alt="Cart"></img>
      <p id="counterCart">{totalQuantity}</p>
    </div>
  );
};

export default CartWidget;

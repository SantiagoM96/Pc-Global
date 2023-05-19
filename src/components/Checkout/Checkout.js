import CheckoutForm from "../CheckoutForm/CheckoutForm"
import db from "../../services/firebase/firebaseConfig";
import Loader from "../Loader/Loader";
import EmptyCart from "../Cart/EmptyCart"
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { createObjOrder } from "../../services/createObjOrder";
import { fetchProductsInCart } from "../../services/getData";
import { updateStock } from "../../services/updateStock";
import { addOrder } from "../../services/addOrder";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [buyerName, setBuyerName] = useState('')
    const { cart, totalPrice, clearCart, totalQuantity } = useContext(CartContext);

    const handleCreateOrder = async ({ fullName, phone, email }) => {
        setLoading(true)
        try {
            //se crea el objeto Order con una función
            const objOrder = createObjOrder(fullName, phone, email, cart, totalPrice)
            //obtengo los productos en carrito para utilizar en el update del stock
            const productsInCart = await fetchProductsInCart(cart);
            //actualizo stock
            await updateStock(productsInCart, cart)
            //agrega orden en base de datos y retorno el id de esa orden para luego renderizarla en pantalla al usuario
            const orderId = await addOrder(db, objOrder)
            //muestro en pantalla el id de la orden
            setOrderId(orderId)
            // y renderizo el nombre del comprador en pantalla
            setBuyerName(fullName)
            clearCart()
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }
    
    return (
        <section className="checkout">
            {loading && (
                <article className="order">
                    <Loader />
                </article>
            )}
            {orderId && (
                <article className="order">
                    <h1>Thanks <span>{buyerName}</span> for choosing us!</h1>
                    <p>Your order ID is <span> {orderId}</span></p>
                    <Link to={`/`} className="yellowBtn orderBtn">view more</Link>
                </article>
            )}
            {totalQuantity <= 0 && !orderId && (
                <EmptyCart />
            )
            }
            {!loading && !orderId && totalQuantity > 0 && <CheckoutForm onConfirm={handleCreateOrder} />}
        </section>
    );
}

export default Checkout
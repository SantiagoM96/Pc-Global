import { useState, useContext } from "react";
import { CartContext } from "../../data/Context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { showToast } from "../../animations/showToast";
import Button from "../Button/Button";
import CartProduct from "../Cart/CartProduct";

const CheckoutForm = ({ onConfirm }) => {
    const { cart, totalQuantity, totalPrice } = useContext(CartContext);
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');

    const handleConfirm = e => {
        e.preventDefault();
        const userData = {
            fullName: fullName, phone: phone, email: email
        }
        switch(true) {
            case !fullName || fullName.trim() === '':
              showToast('error', 'The field cannot be empty')
              break;
              case !/^[a-zA-Z ]+$/.test(fullName):
                showToast('error', 'The field "full name" can only contain letters and spaces');
                break;
            case !/^([0-9]{8}|[0-9]{11})$/.test(phone):
              showToast('error', 'Please enter a valid phone number (8 or 11 numbers)')
              break;
            default:
              onConfirm(userData);
              break;
          }
}

return (
    <article className="purchase">
        <Link to={`/`}>
            <FontAwesomeIcon icon={faAngleLeft} className="back" title="Back" />
        </Link>
        <h1>Checkout</h1>
        <div className="checkoutOrder">
            <div className="orderItems">
                <h2>Purchase summary</h2>
                {cart.map(p => <CartProduct key={p.id} {...p} />)}
                <div className="priceQuantity">
                    <p>{`Total: ${totalQuantity} ${totalQuantity === 1 ? "Item" : "Items"}`}</p>
                    <span>US$ {totalPrice} </span>
                </div>
            </div>
            <div className="infoCheckout">
                <h2>Personal data</h2>
                <p>Before finishing your purchase, complete the following information...</p>
                <form onSubmit={handleConfirm}>
                    <div className="inputField">
                        <label>Full Name*</label>
                        <input type="text" value={fullName} onChange={({ target }) => setFullName(target.value)} placeholder='E.g. Santiago...' />
                    </div>
                    <div className="inputField">
                        <label>Phone*</label>
                        <input type="tel" value={phone} onChange={({ target }) => setPhone(target.value)} placeholder='E.g. 12345678...' />
                    </div>
                    <div className="inputField">
                        <label>Email*</label>
                        <input type="text" value={email} onChange={({ target }) => setEmail(target.value)} placeholder='E.g. santiago@gmail.com...' />
                    </div>
                    <div className="inputField">
                        <label>Confirm Email*</label>
                        <input type="email" value={emailConfirm} onChange={({ target }) => setEmailConfirm(target.value)} />
                        {email !== emailConfirm && <p className="error">The Emails do not match</p>}
                    </div>
                    {fullName && phone && email && email === emailConfirm &&
                        <Button label='Finish Purchase' type='submit' cName='yellowBtn order' />
                    }
                </form>
            </div>
        </div>
    </article>
)

}

export default CheckoutForm
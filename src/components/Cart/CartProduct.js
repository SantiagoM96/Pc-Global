import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../data/Context/CartContext";
import { Link } from "react-router-dom"

const CartProduct = ({ id, name, price, pictureUrl, quantity }) => {

    const { removeProduct } = useContext(CartContext);

    return (
        <div className="cardItem" key={id}>
            <Link to={`http://localhost:3000/item/${id}`}>
                <img src={pictureUrl} alt="" />
            </Link>
            <div className="info">
                <h4 className="name">{name}</h4>
                <p className="price"><span className="span">Quantity: </span>{quantity} x US${price}</p>
            </div>
            <div className="quantityAndSubtotal">
                <p> <span className="span">Subtotal: </span> US${price * quantity}</p>
            </div >
            <FontAwesomeIcon icon={faTrash} className="delete" onClick={() => removeProduct(id)} />
        </div >
    )
}

export default CartProduct
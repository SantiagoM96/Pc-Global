import { Link } from "react-router-dom"
import Button from "../Button/Button"

const EmptyCart = () => {
    return (
        <div className="emptyCart">
            <img src="https://i.postimg.cc/Hntxg0TY/empty-Cart.png" alt="" className="emptyCartImg" />
            <div className="emptyCartInfo">
                <h1>Empty Cart</h1>
                <p>Looks like you haven't made your choice yet...</p>
                <Link to={`/`}>
                    <Button cName="yellowBtn emptyCartBtn" label="Go shopping" />
                </Link>
            </div>
        </div>
    )
}

export default EmptyCart
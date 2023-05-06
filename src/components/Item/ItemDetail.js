import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../../data/Context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const ItemDetail = ({ id, name, category, pictureUrl, price, stock, description }) => {

  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addProduct} = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = { id, name, price, quantity, category, pictureUrl, stock };
    addProduct(item, quantity);
  };

  const outOfStockClass = stock > 0 ? "" : "outOfStock";

  return (
    <>
      <Link to={`/`}>
        <FontAwesomeIcon icon={faAngleLeft} className="back" title="Back" />
      </Link>
      <article className={`itemCardDetail ${outOfStockClass}`} key={id}>
        <div className="pictureAndInfo">
          <img src={pictureUrl} alt={`Imagen de modelo ${name}`} />
          <div className="itemDetails">
            <div className="info">
              <span className="itemCategory">{category}</span>
              <h5 className="itemTitle">{name}</h5>
              <p className="itemPrice">US$ {price}</p>
              <p className={`stock ${outOfStockClass}`}>
                {stock > 0 ? `Stock: ${stock} units` : "Out of stock"}
              </p>
            </div>
            {quantityAdded > 0 ? (
              <>
                <Link to={`/`} className="darkBtn"> continue buying</Link>
                <Link to={'/cart'} className="yellowBtn"> buy now</Link>
              </>
            ) : (
              <ItemCount initial={stock > 0 ? 1 : 0} stock={stock} onAdd={handleOnAdd} />)}
          </div>
        </div>
        <div className="description">
          <h6>Description</h6>
          <p className="itemDescription">{description}</p>
        </div>
      </article>
    </>
  );
};

export default ItemDetail;

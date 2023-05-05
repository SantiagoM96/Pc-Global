import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Item = ({ id, name, category, pictureUrl, price, stock }) => {
  const outOfStockClass = stock > 0 ? "" : "outOfStock";

  return (
    <>
      <div className={`itemCard ${outOfStockClass}`} key={id}>
        <img src={pictureUrl} alt={`Imagen de modelo ${name}`} />
        <h5 className="itemCategory">{category}</h5>
        <p className="itemTitle">{name}</p>
        <p className="itemPrice">US$ {price}</p>
        <p className={`itemInfo ${outOfStockClass}`}>
          {stock > 0 ? `Stock: ${stock} units` : "Out of stock"}
        </p>
        <Link to={`/item/${id}`}>
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="btnItemDetail"
            title="View Details"
          />
        </Link>
      </div>
    </>
  );
};

export default Item;

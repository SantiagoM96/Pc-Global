import Loader from "../Loader/Loader";
import ItemDetail from "./ItemDetail";
import { fetchProductById } from "../../services/getData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { isValidProduct } from "../../services/utils/isValidProduct";

const ItemDetailContainer = () => {
  const { itemId } = useParams()
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const productDataAdapted = await fetchProductById(itemId);
      setProduct(productDataAdapted);
      setLoading(false);
    };

    fetchData();
  }, [itemId]);

  return (
    <section className="itemDetailContainer">
      {loading ? (
        <Loader />
      ) : (
        
        /* se genera una función que valida todas las propiedades del objeto product e informa al ingresar 
        en la URL un id inexistente, después de item/,  un mensaje de producto inexistente*/
        isValidProduct(product)
          ? <ItemDetail {...product} />
          : <div className="noProduct">
            <img src="https://i.postimg.cc/Hntxg0TY/empty-Cart.png" alt="" className="emptyCartImg"
            />
            <h1>This product doesn't exist</h1>
          </div>
      )}
    </section>
  );
};

export default ItemDetailContainer;

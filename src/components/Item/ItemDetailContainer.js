import Loader from "../Loader/Loader";
import ItemDetail from "./ItemDetail";
import { fetchProductById } from "../../data/services/getData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { isValidProduct } from "../../data/services/utils/isValidProduct";

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
        //se genera una función ubicada en services/utils ya que exige validar cada una de las propiedades para renderizar el mensaje de no existe
        isValidProduct(product)
          ? <ItemDetail {...product} />
          : <div className="noProduct">
            <img
              src="https://i.postimg.cc/Hntxg0TY/empty-Cart.png"
              alt=""
              className="emptyCartImg"
            />
            <h1>This product doesn't exist</h1>
          </div>
      )}
    </section>
  );
};

export default ItemDetailContainer;

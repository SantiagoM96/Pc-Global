import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProductsByCategory } from "../../services/getData"
import ItemList from "./ItemList";
import Categories from "../Categories/Categories";
import FrontPage from "../FrontPage/FrontPage";
import Loader from "../Loader/Loader";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const productsDataAdapted = await fetchProductsByCategory(categoryId);
      setProducts(productsDataAdapted);
      setLoading(false);
    };

    fetchData();
  }, [categoryId]);

  return (
    <section className="itemListContainer">

      {loading ? (
        <Loader />
      ) : (
        <>
          <FrontPage cName="frontPage" title="Quality First" text="Choose PC GLOBAL" />
          <h3>{greeting}</h3>
          <article className="categoriesContainer">
            <nav className="categories">
              <Categories />
            </nav>
          </article>
          <ItemList products={products} />
        </>

      )}
    </section>
  );
};

export default ItemListContainer;

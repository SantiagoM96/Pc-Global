import Item from "./Item"
import Loader from "../Loader/Loader"

const ItemList = ({ products }) => {

    return (
        <article className="itemCardContainer" >
            {
                products.length > 0
                    ? products.map(prod => <Item key={prod.id} {...prod} />)
                    : <Loader />}
        </article>
    )
}

export default ItemList
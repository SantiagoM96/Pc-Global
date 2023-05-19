import { writeBatch } from "firebase/firestore";
import { productsAdapter } from "../adapters/productsAdapter";
import db from "./firebase/firebaseConfig";

export const updateStock = async (productsInCart, cart) => {
    const batch = writeBatch(db);
    productsInCart.forEach(doc => {
        const productsAdapted = productsAdapter(doc);
        const stockDb = productsAdapted.stock
        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity
        //bajo la cantidad en stock de acuerdo a lo que se compró de cada producto
        batch.update(doc.ref, { stock: stockDb - prodQuantity })
    })
    await batch.commit()
}
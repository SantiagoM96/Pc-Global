import { productsAdapter} from "../adapters/productsAdapter";
import { getDocs, collection, query, where, doc, getDoc, documentId, orderBy } from "firebase/firestore"
import db from "./firebase/firebaseConfig";

export const fetchProductsByCategory = async (categoryId) => {
    try {
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : query(collection(db, 'products'), orderBy('price', 'desc'));
        const response = await getDocs(collectionRef);
        const productsAdapted = response.docs.map(doc => productsAdapter(doc));
        return productsAdapted;
    } catch (error) {
        console.error(error);
    }
};

export const fetchProductById = async (itemId) => {
    try {
        const docRef = doc(db, 'products', itemId);
        const response = await getDoc(docRef);
        const productAdapted = productsAdapter(response);
        return productAdapted;
    } catch (error) {
        console.error(error);
    }
};

export const fetchProductsInCart = async (cart) => {
    const ids = cart.map(prod => prod.id);
    const productsRef = collection(db, 'products');
    const productsAddFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
    const { docs } = productsAddFromFirestore;
    return docs;
}

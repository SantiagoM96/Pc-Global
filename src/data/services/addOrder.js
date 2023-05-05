import { collection, addDoc } from "firebase/firestore";

export const addOrder = async (db, objOrder) => {
    try {
        const orderRef = collection(db, 'orders')
        const orderAdded = await addDoc(orderRef, objOrder)
        const idOrderAdded = orderAdded.id
        return idOrderAdded
    } catch (err) {
        console.error(err)
    }
}
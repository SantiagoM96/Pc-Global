import { Timestamp } from "firebase/firestore";

export const createObjOrder = (fullName, phone, email, cart, totalPrice) => {
    const objOrder = {
        buyer: {
            fullName,
            phone,
            email,
        },
        items: cart.map((prod) => ({
            id: prod.id,
            name: prod.name,
            price: prod.price,
            quantity: prod.quantity,
        })),
        totalPrice,
        date: Timestamp.fromDate(new Date()),
    };

    return objOrder;
};
import { collection, addDoc } from "firebase/firestore";
import uploadImage from "./uploadImage.js";

export default async function addListing(db, firebase, data) {
    console.log(data);
    const listing = await addDoc(collection(db, "listings"), {
        title: data.title,
        desc: data.desc,
        price: data.price,
        userId: data.userId
    });

    await uploadImage(firebase, listing.id, data.images);
}
import { getDoc, doc } from 'firebase/firestore';
import getImages from './getImages.js';

export default async function getListing(db, docRef) {
    const listing = await getDoc(doc(db, "listings", docRef));
    const data = {...listing.data()};
    
    return data;
}
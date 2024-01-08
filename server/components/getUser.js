import { getDoc, doc } from 'firebase/firestore';

export default async function getUser(db, docRef) {
    const user = await getDoc(doc(db, "users", docRef));
    const data = user.data();
    
    return data;
}
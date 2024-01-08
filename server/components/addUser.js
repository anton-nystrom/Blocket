import { collection, setDoc, addDoc, doc } from "firebase/firestore"; 

export default async function addUser(db, data) {
    const docRef = await addDoc(collection(db, "ids"), {
        personalNumber: data.personalNumber
    });

    console.log(docRef.id);

    await setDoc(doc(db, "users", docRef.id), {
        firstName: data.givenName,
        lastName: data.surname
    });

    return docRef.id;
}
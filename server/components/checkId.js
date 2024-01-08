import { collection, query, where, getDocs } from "firebase/firestore";

export default async function checkId(db, id) {

    let userExists = false;
    
    const q = query(collection(db, "ids"), where("personalNumber", "==", id));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        userExists = doc.id;
    });

    return userExists;
}
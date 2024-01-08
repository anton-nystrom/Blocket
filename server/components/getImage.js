import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

export default async function getImage(firebase, docRef) {

    const storage = getStorage(firebase);
    const folderRef = ref(storage, docRef + "/");
    const list = await listAll(folderRef);

    const image = ref(storage, list.items[0]);
    const url = await getDownloadURL(image);

    return url
}

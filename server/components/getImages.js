import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

export default async function getImages(firebase, docRef) {

    const storage = getStorage(firebase);
    const folderRef = ref(storage, docRef);
    const list = await listAll(folderRef);

    const images = await Promise.all(list.items.map(async(item) => {
        const image = ref(storage, item);
        const url = await getDownloadURL(image);
        return {image: url}
    }));

    return images;
}

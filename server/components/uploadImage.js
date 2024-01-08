import { getStorage, ref, uploadString } from "firebase/storage";

export default async function uploadImage(firebase, listing, images) {

    images.map((image) => {
        const docRef = listing + "/" + image.fileName;

        const storage = getStorage(firebase);
        const folderRef = ref(storage, docRef);
    
        uploadString(folderRef, image.data, 'data_url');
    });
    
}

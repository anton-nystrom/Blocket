import { collection, getDocs } from 'firebase/firestore';
import getImage from './getImage.js';

export default async function getListings(db, firebase) {
    const listingsCol = collection(db, 'listings');
    const listingSnapshot = await getDocs(listingsCol);

    const listings = await Promise.all(listingSnapshot.docs.map(async(listing) => {
        
        const image = await getImage(firebase, listing.id);
        
        return({
            ...listing.data(), id: listing.id, image: image
        })
    }));
    
    return listings;
}
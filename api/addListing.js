import * as FileSystem from 'expo-file-system';
const ip = process.env.IP_ADDRESS
const addListing = async(data) => {

    let images = [];

    for (let i = 0; i < data.images.length; i++) {
        const image = data.images[i];
        const fileName = image.uri.slice(image.uri.lastIndexOf('/') + 1)
        const base64 = await FileSystem.readAsStringAsync(image.uri, { encoding: 'base64' });
        const imageData = 'data:image/jpeg;base64,' + base64
        images.push({fileName: fileName, data: imageData});
    }

    try {
        await fetch(`http://${ip}:3000/create`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: data.title,
                desc: data.desc,
                price: data.price,
                userId: data.userId,
                images: images
            })
        });
    } catch(error) {
        console.error(error);
    }
}

export default addListing
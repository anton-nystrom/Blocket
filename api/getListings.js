const ip = process.env.IP_ADDRESS
const getListings = async () => {
    try {
        const response = await fetch(`http://${ip}:3000/`);
        const data = await response.json();
        return data
    } catch (error) {
      console.error(error);
    }
};

export default getListings
import getUser from "./getUser";
const ip = process.env.IP_ADDRESS
const getListing = async (id) => {
    try {
        const response = await fetch(`http://${ip}:3000/listing`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        });
        let data = await response.json();
        const creator = await getUser(data.userId);
        data = {...data, creator: creator}
        return data;
    } catch (error) {
      console.error(error);
    }
};

export default getListing
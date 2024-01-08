const ip = process.env.IP_ADDRESS
const getUser = async (id) => {
    try {
        const response = await fetch(`http://${ip}:3000/user`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
      console.error(error);
    }
};

export default getUser
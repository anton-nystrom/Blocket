const ip = process.env.IP_ADDRESS
const login = async(data) => {
    try {
        const response = await fetch(`http://${ip}:3000/bankid`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                personalNumber: "198912232389",
                endUserIp: ip
            })
        });
        const data = await response.json();
        return data;
    } catch(error) {
        console.error(error);
    }
}

export default login
import BankId from "bankid";

const client = new BankId.BankIdClient();
const pno = "198912232389";

export default async function bankId(req) {
    let data = {
        data: null,
        error: false
    };
    try {
        const response = await client.authenticateAndCollect({
            personalNumber: req.personalNumber,
            endUserIp: req.endUserIp
        })
        data = {...data, data: response.completionData.user};
    } catch (error) {
        data = {...data, error: error};
    }

    return data;
}
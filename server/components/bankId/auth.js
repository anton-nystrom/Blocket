import axios from 'axios';
import https from 'node:https';
import fs from 'node:fs';

export default async function auth() {

  const ca = fs.readFileSync("./certs/certificate.pem");
  const cert = fs.readFileSync("./certs/cert.crt");
  const key = fs.readFileSync("./certs/decrypted.key");

  let data = JSON.stringify({
    "personalNumber": "198912232389",
    "endUserIp": "192.168.68.102"
  });

  const httpsAgent = new https.Agent({
    cert: cert,
    key: key,
    ca: ca
  });
      
  let config = {
    httpsAgent: httpsAgent,
    method: 'post',
    url: 'https://appapi2.test.bankid.com/rp/v5.1/auth',
    headers: { 
      'Content-Type': 'application/json', 
      'Host': 'appapi2.test.bankid.com'
    },
    data : data
  };
      
  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    }
  );
}
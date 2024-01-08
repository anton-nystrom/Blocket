import express from "express";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import getListings from "./components/getListings.js";
import addListing from "./components/addListing.js";
import bankId from "./components/bankId/bankId.js";
import checkId from "./components/checkId.js";
import addUser from "./components/addUser.js";
import getListing from "./components/getListing.js";
import getUser from "./components/getUser.js";
import getImages from "./components/getImages.js";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

const app = express();

app.use(express.json({limit: '300mb'}));

app.get('/', async (req, res) => {
    res.send(await getListings(db, firebase))
})

app.post('/create', async (req, res) => {
    if(Object.keys(req.body).includes("title", "desc", "price")) {
        await addListing(db, firebase, req.body);
        res.send("Create")
    }
    else {
        res.send("Wrong")
    }
})

app.post('/bankid', async (req, res) => {
    let data = {
        data: null,
        error: false
    };
    const user = await bankId(req.body);
    if(!user.error) {
        const userExists = await checkId(db, user.data.personalNumber);
        let userId;
        if (userExists) {
            console.log("User exists with the id: " + userExists);
            userId = userExists;
        }
        else {
            console.log("User doens't exist. Adding now.");
            userId = await addUser(db, user);
        }
        data = {...data, data: {
            userId: userId,
            firstName: user.data.givenName,
            lastName: user.data.surname
        }};
    }
    else {
        console.log(user.error);
        data = {...data, error: error};
    }
    console.log(data);
    res.send(data);
    //auth();
})

app.post('/listing', async (req, res) => {
    res.send(await getListing(db, req.body.id))
    //res.send(await getImages(firebase, req.body.id))
})

app.post('/user', async (req, res) => {
    res.send(await getUser(db, req.body.id))
})

app.listen(3000);